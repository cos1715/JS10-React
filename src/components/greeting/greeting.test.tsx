import { render, screen } from "@testing-library/react";
import { Greeting } from "./greeting";

test("renders greeting with name", async () => {
  render(<Greeting name="Taras" />);
  // const linkElement = screen.getByText(/Hello, Taras!/i);
  const linkElement = await screen.findByText(/Hello, Taras!/i);
  expect(linkElement).toBeInTheDocument();
});
