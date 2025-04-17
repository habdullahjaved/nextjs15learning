"use client";
import TimeSlotPicker1 from "@/app/components/layout/Inputs/TimeSlotPicker1";
import React from "react";

const TestComponent = () => {
  const [selectedTime, setSelectedTime] = React.useState("");
  const handleChange = (e) => {
    setSelectedTime(e.target.value);
  };
  console.log(selectedTime);
  return (
    <>
      <TimeSlotPicker1
        selectedTime={selectedTime}
        handleChange={handleChange}
        interval={15}
        label="Select Time Slot"
        onSubmit={(time) => alert(`Time slot selected: ${time}`)}
        initialTime={selectedTime}
      />
      <div>
        <h1>Selected Time: {selectedTime}</h1>
      </div>
    </>
  );
};

export default TestComponent;
