"use client";
// components/DropZone.tsx
import { useRef } from "react";
import { UploadCloud } from "lucide-react";

export default function DropZone() {
  const dropRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-80 h-80 flex items-center justify-center">
      {/* Animated Blob Background */}
      <div className="absolute inset-0 animate-blob bg-pink-500 opacity-70 rounded-full blur-2xl" />
      <div className="absolute inset-4 animate-blob animation-delay-2000 bg-pink-400 opacity-70 rounded-full blur-2xl" />
      <div className="absolute inset-8 animate-blob animation-delay-4000 bg-pink-300 opacity-70 rounded-full blur-2xl" />

      {/* Drop Area Content */}
      <div
        ref={dropRef}
        className="relative z-10 bg-white/10 backdrop-blur-md p-10 rounded-xl flex flex-col items-center text-white border border-white/20"
      >
        <UploadCloud className="w-10 h-10 mb-4" />
        <span className="text-lg">
          Drop <span className="italic">OR</span>{" "}
          <span className="text-pink-300 underline">Paste</span>
        </span>
      </div>
    </div>
  );
}
