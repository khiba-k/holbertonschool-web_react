import { getCurrentYear, getFooterCopy, getLatestNotification } from "./utils";

describe("Utils functions", () => {
  test("getCurrentYear() returns correct year", () => {
    // Expected year
    const currentYear = () => {
      const date = new Date();
      return date.getFullYear();
    };

    // Assert functions return value
    expect(getCurrentYear()).toBe(currentYear());
  });

  test("getFooterCopy() returns correct string when arg is true", () => {
    const returnString = "Holberton School main dashboard";

    // Assert functions return value
    expect(getFooterCopy(false)).toBe(returnString);
  });

  test("getFooterCopy() returns correct string when arg is false", () => {
    const returnString = "Holberton School";

    // Assert functions return value
    expect(getFooterCopy(true)).toBe(returnString);
  });

  test("getLatestNotification() returns correct string", () => {
    const notifyString =
      "<strong>Urgent requirement</strong> - complete by EOD";

    // Assert functions return value
    expect(getLatestNotification()).toBe(notifyString);
  });
});
