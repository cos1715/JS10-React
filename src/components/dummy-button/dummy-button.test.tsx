import { render, screen, fireEvent } from "@testing-library/react";
import { ToggleButton } from "./dummy-button";

beforeAll(() => {
  return render(<ToggleButton />);
});

describe("Dummy btn test", () => {
  it("button without click", async () => {
    render(<ToggleButton />);
    const element = await screen.findByText("Close");
    expect(element).toHaveTextContent("Close");
  });
  it("button after click", async () => {
    render(<ToggleButton />);
    const element = await screen.findByText("Close");
    fireEvent.click(element);
    expect(element).toHaveTextContent("Open");
  });
});