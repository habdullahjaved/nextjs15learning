"use client";

import React, { useState, useRef, useEffect, KeyboardEvent } from "react";
import { ChevronDown, X } from "lucide-react";

export type OptionType<T = unknown> = T extends object
  ? T
  : { id: string | number; label: string };

export interface MultiSelectProps<T> {
  options: T[];
  selected: T[];
  onChange: (selected: T[]) => void;
  getOptionLabel?: (option: T) => string;
  getOptionValue?: (option: T) => string | number;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  creatable?: boolean;
  closeOnSelect?: boolean;
}

const defaultGetLabel = (option: unknown) =>
  typeof option === "object"
    ? (option as { label?: string })?.label || ""
    : String(option);

const defaultGetValue = (option: unknown): string | number => {
  if (typeof option === "object") {
    const obj = option as { id?: string | number };
    return obj?.id ?? JSON.stringify(option); // Fallback to stringified object
  }
  return option as string | number;
};

export function MultiSelectD<T>({
  options,
  selected,
  onChange,
  getOptionLabel = defaultGetLabel,
  getOptionValue = defaultGetValue,
  placeholder = "Select...",
  className = "",
  disabled = false,
  loading = false,
  creatable = false,
  closeOnSelect = false,
}: MultiSelectProps<T>) {
  const [inputValue, setInputValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const getFilteredOptions = () => {
    const searchValue = inputValue.toLowerCase();
    return options.filter((option) => {
      const label = getOptionLabel(option).toLowerCase();
      return (
        label.includes(searchValue) &&
        !selected.some((sel) => getOptionValue(sel) === getOptionValue(option))
      );
    });
  };

  const handleSelect = (option: T) => {
    onChange([...selected, option]);
    setInputValue("");
    if (closeOnSelect) setIsOpen(false);
  };

  const handleRemove = (value: string | number) => {
    onChange(selected.filter((option) => getOptionValue(option) !== value));
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    const filtered = getFilteredOptions();
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setFocusedIndex((prev) => Math.min(prev + 1, filtered.length - 1));
        break;
      case "ArrowUp":
        e.preventDefault();
        setFocusedIndex((prev) => Math.max(prev - 1, -1));
        break;
      case "Enter":
        if (focusedIndex >= 0 && filtered[focusedIndex]) {
          handleSelect(filtered[focusedIndex]);
        } else if (creatable && inputValue) {
          handleSelect({ label: inputValue, value: inputValue } as T);
        }
        break;
      case "Escape":
        setIsOpen(false);
        break;
      case "Backspace":
        if (!inputValue && selected.length > 0) {
          handleRemove(getOptionValue(selected[selected.length - 1]));
        }
        break;
    }
  };

  useEffect(() => {
    if (isOpen && filteredOptions.length > 0) {
      setFocusedIndex(0);
    }
  }, [isOpen, inputValue]);

  const filteredOptions = getFilteredOptions();
  const showCreateOption =
    creatable &&
    inputValue &&
    !options.some((option) => getOptionLabel(option) === inputValue);

  return (
    <div
      ref={wrapperRef}
      className={`relative ${className}`}
      onBlur={() => !disabled && setIsOpen(false)}
    >
      <div
        className={`flex flex-wrap items-center gap-2 p-2 border rounded-lg bg-white transition-all
          ${disabled ? "bg-gray-100 cursor-not-allowed" : "cursor-text"}
          ${
            isOpen ? "border-primary ring-2 ring-indigo-600" : "border-gray-300"
          }`}
        onClick={() =>
          !disabled && (setIsOpen(true), inputRef.current?.focus())
        }
      >
        {selected.map((option) => {
          const value = getOptionValue(option);
          const label = getOptionLabel(option);

          return (
            <div
              key={value}
              className="flex items-center gap-1.5 px-3 py-1 bg-[#635bff] text-white rounded-md text-sm shadow-sm hover:bg-[#534bc7] transition-colors"
            >
              <span>{label}</span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemove(value);
                }}
                className="hover:text-primary-100 transition-colors cursor-pointer"
                disabled={disabled}
                aria-label={`Remove ${label}`}
              >
                <X size={14} />
              </button>
            </div>
          );
        })}

        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          placeholder={selected.length === 0 ? placeholder : ""}
          className="flex-1 min-w-[100px] bg-transparent outline-none text-sm cursor-pointer"
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => !disabled && setIsOpen(true)}
          disabled={disabled}
        />

        <div className="flex items-center gap-1 ml-auto">
          {loading && (
            <div className="animate-spin h-4 w-4 border-2 border-gray-400 rounded-full border-t-transparent" />
          )}
          <ChevronDown
            size={18}
            className={`text-gray-400 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>

      {isOpen && !disabled && (
        <div
          className="absolute w-full mt-1 max-h-60 overflow-auto rounded-lg border bg-white shadow-lg z-50"
          role="listbox"
        >
          {filteredOptions.map((option, index) => {
            const value = getOptionValue(option);
            const label = getOptionLabel(option);

            return (
              <div
                key={value}
                role="option"
                aria-selected={focusedIndex === index}
                onMouseEnter={() => setFocusedIndex(index)}
                className={`px-4 py-2 cursor-pointer transition-colors
                  ${
                    focusedIndex === index
                      ? "bg-primary/10"
                      : "hover:bg-gray-50"
                  }`}
                onMouseDown={() => handleSelect(option)}
              >
                {label}
              </div>
            );
          })}

          {showCreateOption && (
            <div
              className="px-4 py-2 text-primary cursor-pointer hover:bg-primary/10"
              onMouseDown={() =>
                handleSelect({ label: inputValue, value: inputValue } as T)
              }
            >
              Create "{inputValue}"
            </div>
          )}

          {filteredOptions.length === 0 && !showCreateOption && (
            <div className="px-4 py-2 text-gray-500">No options found</div>
          )}
        </div>
      )}
    </div>
  );
}
