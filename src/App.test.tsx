import { render, screen, cleanup } from "@testing-library/react";
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

describe("Before fetch data", () => {
  test("renders title users list", () => {
    const linkElement = screen.getByText(/users list/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("find input element", () => {
    const inputElement = screen.getByPlaceholderText(/Search by user name.../i);
    expect(inputElement).toBeInTheDocument();
  });
  test("Loading div", () => {
    const loadingElement = screen.getByText(/Loading.../i);
    expect(loadingElement).toBeInTheDocument();
  });
});
