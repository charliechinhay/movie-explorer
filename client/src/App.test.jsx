/* global test, expect */
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders Movie Explorer title", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>,
  );
  const titleElement = screen.getByRole("heading", { name: /movie explorer/i });
  expect(titleElement).toBeInTheDocument();
});
