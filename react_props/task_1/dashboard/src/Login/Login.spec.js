import { render, screen } from "@testing-library/react";
import Login from "./Login";

describe("Login Component", () => {
  beforeEach(() => {
    render(<Login />);
  });

  // Test if Login paragraph has correct text
  it("Login has correct text", () => {
    const loginText = screen.getByText(/Login to access the full dashboard/i);

    expect(loginText).toBeInTheDocument();
  });

  // Test if Login renders two input elements, two labels and button
  it("renders two input elements", () => {
    //Get input elements
    const inputElements = screen.getAllByRole("textbox");
    const inputLength = inputElements.length;

    // Get labels
    const email = screen.getByLabelText(/Email/i);
    const password = screen.getByLabelText(/Password/i);

    //Get button
    const button = screen.getByRole("button");

    // Assert element
    expect(inputLength).toEqual(1);

    // Assert elements and values
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();

    // Assert text content of button
    expect(button.textContent).toBe("OK");
  });

  it("label is correctly associated with input", () => {
    const emailLabel = screen.getByText(/email/i);
    expect(emailLabel).toHaveAttribute("for", "email");
    const emailInput = screen.getByLabelText(/email/i);
    expect(emailInput).toHaveAttribute("id", "email");
  });
});
