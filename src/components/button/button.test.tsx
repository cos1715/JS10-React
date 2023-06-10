import { render, screen } from "@testing-library/react";
import { Button } from "./";

test("renders learn react link", () => {
  render(<Button title="Click me!" />);
  const linkElement = screen.getByText(/Click me!/i);
  expect(linkElement).toBeInTheDocument();
});
