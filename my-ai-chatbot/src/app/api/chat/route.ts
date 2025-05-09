// // app/api/chat/route.ts
// app/api/chat/route.ts
import { NextResponse } from "next/server";
import openai from "@/lib/openai";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json(
        { error: "No message provided" },
        { status: 400 }
      );
    }

    const chatCompletion = await openai.chat.completions.create({
      model: "openai/gpt-3.5-turbo", // Or try 'anthropic/claude-3-haiku'
      messages: [{ role: "user", content: message }],
    });

    const reply = chatCompletion.choices[0].message.content;

    return NextResponse.json({ response: reply });
  } catch (err) {
    console.error("Chat error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// import { NextResponse } from "next/server";
// import OpenAI from "openai";

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const message = body?.message;

//     if (!message) {
//       return NextResponse.json(
//         { error: "No message provided" },
//         { status: 400 }
//       );
//     }

//     const chatCompletion = await openai.chat.completions.create({
//       messages: [{ role: "user", content: message }],
//       model: "gpt-3.5-turbo",
//     });

//     return NextResponse.json({
//       response: chatCompletion.choices[0].message.content,
//     });
//   } catch (error) {
//     console.error("API Error:", error);
//     return NextResponse.json({ error: "Server error" }, { status: 500 });
//   }
// }
