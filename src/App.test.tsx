import React from "react";
import { render, screen, act, waitFor, cleanup } from "@testing-library/react";
import App from "./App";
import { UserContextController } from "./context/UserContext";

beforeEach(() => {
  render(
    <UserContextController>
      <App />
    </UserContextController>
  );
});

afterEach(cleanup);

test("renders title users list", async () => {
  const { getByText } = render(
    <UserContextController>
      <App />
    </UserContextController>
  );

  // const linkElement = screen.getByText(/users list/i);
  // const inputElement = screen.getAllByPlaceholderText(
  //   /Search by user name.../i
  // );

  // screen.debug();

  await act(() => {
    screen.debug();
  });
  // expect(inputElement).toBeInTheDocument();
});
