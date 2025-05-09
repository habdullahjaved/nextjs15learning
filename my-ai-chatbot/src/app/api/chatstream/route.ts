import { NextResponse } from "next/server";
import openai from "@/lib/openai";

// Stream response to the client
async function streamResponse(responseText: string) {
  const chunkSize = 50; // Size of each chunk
  let currentIndex = 0;

  const encoder = new TextEncoder();

  // Create a ReadableStream to send chunks to the client
  const stream = new ReadableStream({
    async start(controller) {
      // Simulate typing by sending chunks
      while (currentIndex < responseText.length) {
        const chunk = responseText.slice(
          currentIndex,
          currentIndex + chunkSize
        );
        currentIndex += chunkSize;

        // Yield the chunk to the client
        controller.enqueue(encoder.encode(chunk));

        // Simulate typing speed with a small delay (e.g., 100ms)
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      controller.close(); // Close the stream after sending all chunks
    },
  });

  return stream;
}

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: "No message provided" },
        { status: 400 }
      );
    }

    // Request the full response from OpenAI API
    const openaiResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    });

    const reply = openaiResponse.choices[0].message.content;

    const stream = await streamResponse(reply);

    // Return the stream as a response to the client
    return new NextResponse(stream);
  } catch (err) {
    console.error("Error while fetching chat response:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
