import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import NotificationItem from "./NotificationItem";

describe("NotificationItem Component", () => {
  const notificationsList = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    {
      id: 3,
      type: "urgent",
      html: { __html: "<strong>Urgent requirement</strong> - complete by EOD" },
    },
  ];

  beforeEach(() => {
    // Render NotificaitonItem with type set to default
    render(
      <ul>
        {notificationsList.map((listItem) => (
          <NotificationItem
            type={listItem.type}
            html={listItem.html}
            value={listItem.value}
          />
        ))}
      </ul>
    );
  });

  // Check whether the li element has the color blue if type is default
  it("Color is blue when type is default", () => {
    // Get list element
    const listElements = screen.getAllByRole("listitem");

    // Assert that list text is blue
    expect(listElements[0]).toHaveStyle({ color: "blue" });

    // Assert if type value is equal to default
    expect(listElements[0]).toHaveAttribute(
      "data-notification-type",
      "default"
    );
  });

  // Check whether the li element has the color red if type is urgent
  it.skip("Color is red when type is urgent", () => {
    // Get list element
    const listElements = screen.getAllByRole("listitem");

    // Assert that list text is red
    expect(listElements[1]).toHaveStyle({ color: "red" });

    // Assert if type value is equal to default
    expect(listElements[1]).toHaveAttribute("data-notification-type", "urgent");
  });
});
