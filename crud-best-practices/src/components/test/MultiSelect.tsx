"use client";

import React, { useState, useRef } from "react";

export interface Feature {
  id: number;
  name: string;
}

export const features: Feature[] = [
  { id: 1, name: "Air Conditioning" },
  { id: 2, name: "ABS" },
  { id: 3, name: "Driver" },
  { id: 4, name: "Music System" },
];

interface MultiSelectProps {
  options: Feature[];
  selected: Feature[];
  onChange: (features: Feature[]) => void;
}

export const MultiSelect: React.FC<MultiSelectProps> = ({
  options,
  selected,
  onChange,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleSelect = (feature: Feature) => {
    if (!selected.some((f) => f.id === feature.id)) {
      onChange([...selected, feature]);
    }
    setInputValue("");
    setIsOpen(true);
  };

  const handleRemove = (id: number) => {
    onChange(selected.filter((f) => f.id !== id));
  };

  const filteredOptions = options.filter(
    (f) =>
      f.name.toLowerCase().includes(inputValue.toLowerCase()) &&
      !selected.some((s) => s.id === f.id)
  );

  const handleFocus = () => setIsOpen(true);
  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!wrapperRef.current?.contains(e.relatedTarget)) {
      setIsOpen(false);
    }
  };

  return (
    <div
      className="relative w-full max-w-md"
      tabIndex={0}
      onBlur={handleBlur}
      ref={wrapperRef}
    >
      <div
        className={`flex flex-wrap items-center gap-2 p-2 border rounded-lg transition-all bg-white focus-within:ring-2 focus-within:ring-[#635bff] ${
          isOpen ? "border-[#635bff]" : "border-gray-300"
        }`}
        onClick={() => {
          setIsOpen(true);
          document.getElementById("multiselect-input")?.focus();
        }}
      >
        {selected.map((feature) => (
          <div
            key={feature.id}
            className="flex items-center gap-1 px-3 py-1 bg-[#635bff] text-white rounded-full text-sm font-medium cursor-pointer hover:bg-indigo-700 transition"
          >
            <span>{feature.name}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleRemove(feature.id);
              }}
              className="text-white hover:text-gray-100"
              aria-label={`Remove ${feature.name}`}
            >
              ✕
            </button>
          </div>
        ))}

        <input
          id="multiselect-input"
          type="text"
          className="flex-1 min-w-[120px] px-1 py-1 outline-none bg-transparent text-sm"
          placeholder="Search or select..."
          value={inputValue}
          onFocus={handleFocus}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>

      {isOpen && (
        <div className="absolute left-0 right-0 mt-1 max-h-60 overflow-y-auto rounded-lg border bg-white shadow-lg z-50">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((feature) => (
              <div
                key={feature.id}
                onMouseDown={() => handleSelect(feature)} // prevent blur
                className="px-4 py-2 cursor-pointer hover:bg-[#f1f0ff] text-sm text-gray-800 transition"
              >
                {feature.name}
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-sm text-gray-500">
              No options found
            </div>
          )}
        </div>
      )}
    </div>
  );
};
