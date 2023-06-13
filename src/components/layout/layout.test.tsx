import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Layout } from "./layout";
import { MemoryRouter } from "react-router-dom";
import { useAuthContext } from "providers/auth";

// jest.mock("providers/auth", () => ({
//   useAuthContext: jest.fn(() => ({ username: "test", setAuth: jest.fn() })),
// }));

jest.mock("providers/auth");

describe("layout", () => {
  it("layout not authed", async () => {
    (useAuthContext as jest.Mock).mockReturnValue({
      username: "",
      setAuth: jest.fn(),
    });
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    const element = await screen.findByText("LOGIN");

    expect(element).toBeInTheDocument();
  });

  it("layout authed", async () => {
    (useAuthContext as jest.Mock).mockReturnValue({
      username: "test",
      setAuth: jest.fn(),
    });

    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    const element = await screen.findByText(/Log out/i);

    expect(element).toBeInTheDocument();
  });
});
