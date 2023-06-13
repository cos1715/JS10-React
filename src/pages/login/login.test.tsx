import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Login } from "./login";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { MemoryRouter } from "react-router-dom";

jest.mock("../../const", () => ({
  VITE_ACCESS_TOKEN: "test",
}));

const onSubmit = jest.fn(() => ({ status: 200 }));
jest.mock("store/profile/mutations", () => ({
  useProfileMutation: jest.fn(() => ({
    mutateAsync: onSubmit,
    error: null,
  })),
}));

test("allows the user to fill out the form", async () => {
  render(
    <MemoryRouter>
      {/* <QueryClientProvider client={new QueryClient()}> */}
      <Login />
      {/* </QueryClientProvider> */}
    </MemoryRouter>
  );
  const header = screen.getByText("Login");
  expect(header).toBeInTheDocument();
  fireEvent.change(screen.getByLabelText(/Username/i), {
    target: { value: "test" },
  });
  fireEvent.click(screen.getByText(/Sign in/i));
  await waitFor(() => expect(onSubmit).toBeCalled());
  expect(onSubmit).toHaveBeenCalledWith("test");
});
