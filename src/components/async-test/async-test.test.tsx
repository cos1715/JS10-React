import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { FetchGreetingButton } from "./async-test";

test("fetches and displays greeting on button click", async () => {
  const mockGreeting = "Hello";
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ greeting: mockGreeting }),
    })
  ) as any;

  render(<FetchGreetingButton />);

  fireEvent.click(screen.getByText(/Get/i));

  const greetingElement = await waitFor(() => screen.getByText(mockGreeting));

  expect(greetingElement).toBeInTheDocument();
});
