import { getCurrentYear, getFooterCopy, getLatestNotification } from "./utils";

describe("Utils functions", () => {
  it("getCurrentYear() returns correct year", () => {
    // Expected year
    const currentYear = () => {
      const date = new Date();
      return date.getFullYear();
    };

    // Assert functions return value
    expect(getCurrentYear()).toEqual(currentYear());
  });

  it("getFooterCopy() returns correct string depending on arg", () => {
    const isFooterCopy = "Holberton School";
    const isNotFooterCopy = "Holberton School main dashboard";

    // Assert functions return value
    expect(getFooterCopy(true)).toEqual(isFooterCopy);
    expect(getFooterCopy(false)).toEqual(isNotFooterCopy);
  });

  it("getLatestNotification() returns correct string", () => {
    const notifyString =
      "<strong>Urgent requirement</strong> - complete by EOD";

    // Assert functions return value
    expect(getLatestNotification()).toEqual(notifyString);
  });
});
