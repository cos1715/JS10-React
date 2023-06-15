import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { Login } from "./login";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

jest.mock("../../const.ts", () => ({ VITE_ACCESS_TOKEN: "test" }));

const onFetch = jest.fn(() => ({ status: 200 }));
jest.mock("store/profile/mutations", () => ({
  useProfileMutation: jest.fn(() => ({
    mutateAsync: onFetch,
    error: null,
  })),
}));

test("login page", async () => {
  render(
    <QueryClientProvider client={new QueryClient()}>
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    </QueryClientProvider>
  );
  const btn = await screen.findByText(/sign in/i);
  const input = await screen.findByLabelText(/username/i);
  fireEvent.change(input, { target: { value: "test" } });
  fireEvent.click(btn);
  await waitFor(() => expect(onFetch).toHaveBeenCalled());

  expect(onFetch).toHaveBeenCalledWith("test");
});
