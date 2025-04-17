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

const TimeSlotPicker = () => {
  const [selectedTime, setSelectedTime] = useState("");
  const timeSlots = generateTimeSlots(15);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Time slot selected: ${selectedTime}`);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-sm mx-auto p-4 border rounded"
      >
        <label htmlFor="time-slot" className="block font-semibold mb-2">
          Select Time Slot
        </label>
        <select
          id="time-slot"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          className="w-full p-2 border rounded mb-4"
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
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
      <p>
        <strong>Note:</strong> This is a simple time slot picker. You can
        customize the time intervals and styles as needed.
        <br />
        <hr />
        {selectedTime && (
          <p className="mt-4">
            You have selected: <strong>{selectedTime}</strong>
          </p>
        )}
      </p>
    </>
  );
};

export default TimeSlotPicker;
