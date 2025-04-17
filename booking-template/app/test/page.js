import React from "react";
import TimeSlotPicker from "../components/layout/Inputs/TimeSlotPicker";
import TestComponent from "./components/TestComponent";

const TestPage = () => {
  return (
    <>
      <div style={{ padding: "20px", height: "100vh" }}></div>
      <div style={{ padding: "20px", height: "100vh" }}>
        <h1>This is test page</h1>
        <TestComponent />
      </div>{" "}
      <div style={{ padding: "20px", height: "100vh" }}>
        <h1>This is test page</h1>
        <p>Time slot test</p>
        <div></div>
        <p>Time slot test</p>
        {/* <TimeSlotPicker /> */}
      </div>
    </>
  );
};

export default TestPage;
