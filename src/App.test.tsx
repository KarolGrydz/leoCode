import React from "react";
import { render, screen, act, waitFor } from "@testing-library/react";
import App from "./App";

test("renders title users list", () => {
  render(<App />);
  const linkElement = waitFor(() => screen.getByText(/users list/i));
  expect(linkElement).toBeInTheDocument();
});
