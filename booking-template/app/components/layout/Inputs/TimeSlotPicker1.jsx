"use client";

import React, { useState } from "react";

const generateTimeSlots = (interval = 15) => {
  const slots = [];
  const start = new Date();
  start.setHours(0, 0, 0, 0);

  for (let i = 0; i < 24 * 60; i += interval) {
    const hour = Math.floor(i / 60);
    const minute = i % 60;
    const formatted = `${hour.toString().padStart(2, "0")}:${minute
      .toString()
      .padStart(2, "0")}`;
    slots.push(formatted);
  }

  return slots;
};

const TimeSlotPicker1 = ({
  interval = 15,
  label = "Select Time Slot",
  onSubmit,
  selectedTime,
  selectClassName = "w-full p-2 border rounded mb-4",
  buttonClassName = "w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700",
  wrapperClassName = "max-w-sm mx-auto p-4 border rounded",
  handleChange,
}) => {
  const timeSlots = generateTimeSlots(interval);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(selectedTime);
    } else {
      alert(`Time slot selected: ${selectedTime}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={wrapperClassName}>
      <label htmlFor="time-slot" className="block font-semibold mb-2">
        {label}
      </label>
      <select
        id="time-slot"
        value={selectedTime}
        onChange={handleChange}
        className={selectClassName}
        required
      >
        <option value="" disabled>
          -- Select Time --
        </option>
        {timeSlots.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
      <button type="submit" className={buttonClassName}>
        Submit
      </button>
    </form>
  );
};

export default TimeSlotPicker1;
