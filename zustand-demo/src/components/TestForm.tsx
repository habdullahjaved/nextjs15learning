// pages/test.tsx or in your TestForm
"use client";
import React, { useState } from "react";
import RichTextEditor from "@/components/RichTextEditor";
import RichTextEditorV2 from "./RichTextEditorV2";

const TestForm = () => {
  const [content, setContent] = useState("<p>Hello World!</p>");

  return (
    <div className="max-w-2xl mx-auto mt-10">
      {/* <RichTextEditor value={content} onChange={setContent} /> */}
      <RichTextEditorV2 value={content} onChange={setContent} />
      <h2 className="mt-4 font-semibold">Output HTML:</h2>
      <pre className="bg-gray-100 p-2 whitespace-pre-wrap">{content}</pre>
    </div>
  );
};

export default TestForm;
