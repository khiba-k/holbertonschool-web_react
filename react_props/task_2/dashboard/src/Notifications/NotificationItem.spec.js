import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import NotificationItem from "./NotificationItem";

describe("NotificationItem Component", () => {
  // Check whether the li element has the color blue if type is default
  it("Color is blue when type is default", () => {
    const type = "default";
    const value = "Blue Text";

    // Render NotificaitonItem with type set to default
    render(<NotificationItem type={type} value={value} />);

    // Get list element
    const listElement = screen.getByRole("list");

    //Assert that list text is blue
    expect(listElement.textContent).toHaveStyle({ color: "blue" });
  });
});
