import { render, screen, fireEvent } from "@testing-library/react";
import { ToggleButton } from "./dummy-button";

test("button click changes state", () => {
  render(<ToggleButton />);
  const button = screen.getByText("Close");
  fireEvent.click(button);
  expect(button).toHaveTextContent("Open");
});
