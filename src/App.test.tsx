import React from "react";
import { render, screen, act, waitFor } from "@testing-library/react";
import App from "./App";

test("renders title users list", () => {
  render(<App />);
  const linkElement = screen.getByText(/users list/i);
  // const inputElement = screen.getAllByPlaceholderText(
  //   /Search by user name.../i
  // );

  screen.debug();

  expect(linkElement).toBeInTheDocument();
  // expect(inputElement).toBeInTheDocument();
});
