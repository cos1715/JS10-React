import { sum, fetchUsers } from "./App";

jest.mock("./const", () => ({
  VITE_ACCESS_TOKEN: "test",
}));



test("Expect sum to work properly", () => {
  expect(sum(1, 1)).toBe(2);
});


describe("fetchUsers", () => {
  let originalFetch: typeof fetch;

  beforeAll(() => {
    originalFetch = global.fetch;
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({ id: 1, name: "John Doe" }),
      headers: {},
      ok: true,
      status: 200,
    } as unknown as Response);
  });

  afterAll(() => {
    global.fetch = originalFetch;
  });

  it("should fetch user data", async () => {
    // Arrange
    const mockId = 1;

    // Act
    const result = await fetchUsers(mockId);

    // Assert
    expect(global.fetch).toHaveBeenCalledWith(
      `https://dummyjson.com/users/${mockId}`
    );
    expect(result).toEqual({ id: 1, name: "John Doe" });
  });
});
