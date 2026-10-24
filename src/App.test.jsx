
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { test, expect } from "vitest";
import App from "./App";

test("renders the React CI/CD Project heading", () => {
  render(<App />);
  expect(
    screen.getByText("React CI/CD Project")
  ).toBeInTheDocument();
});

test("increases the counter when the button is clicked", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: "Increase" });

  fireEvent.click(button);

  expect(screen.getByText("Counter: 1")).toBeInTheDocument();
});
