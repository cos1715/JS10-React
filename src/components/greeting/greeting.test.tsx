import { Greeting } from "./greeting";
import { render, screen } from "@testing-library/react";

test("Greeting cmp renders correctly", () => {
  render(<Greeting name="Taras" />);
  screen.debug();
  const element = screen.getByText(/Taras/i);
  expect(element).toBeInTheDocument();
});
