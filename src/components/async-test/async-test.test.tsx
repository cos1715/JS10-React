import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { FetchGreetingButton } from "./async-test";

test("async test component with fetch", async () => {
  global.fetch = jest.fn(() => {
    return Promise.resolve({
      json: () => Promise.resolve({ greeting: "Hello" }),
    });
  }) as any;
  render(<FetchGreetingButton />);
  const element = await screen.findByText(/get/i);
  fireEvent.click(element);

  const greetingElem = await waitFor(() => screen.getByText("Hello"));
  expect(greetingElem).toBeInTheDocument();
});
