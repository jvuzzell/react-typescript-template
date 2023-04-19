import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SampleComponent from "../components/SampleComponent";

describe("SampleComponent", () => {
  test("renders with the correct text", () => {
    render(<SampleComponent text="Hello, Jest!" />);
    const element = screen.getByText("Hello, Jest!");
    expect(element).toBeInTheDocument();
  });
});
