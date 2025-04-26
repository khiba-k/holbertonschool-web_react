import { getCurrentYear, getFooterCopy, getLatestNotification } from "./utils";

describe("Utils functions", () => {
  it("getCurrentYear() returns correct year", () => {
    // Expected year
    const currentYear = () => {
      const date = new Date();
      return date.getFullYear();
    };

    // Assert functions return value
    expect(getCurrentYear()).toBe(currentYear());
  });

  it("getFooterCopy() returns correct string when arg is true", () => {
    const returnString = "Holberton School main dashboard";

    // Assert functions return value
    expect(getFooterCopy(false)).toBe(returnString);
  });

  it("getFooterCopy() returns correct string when arg is false", () => {
    const returnString = "Holberton School";

    // Assert functions return value
    expect(getFooterCopy(true)).toBe(returnString);
  });

  it("getLatestNotification() returns correct string", () => {
    const notifyString =
      "<strong>Urgent requirement</strong> - complete by EOD";

    // Assert functions return value
    expect(getLatestNotification()).toBe(notifyString);
  });
});
