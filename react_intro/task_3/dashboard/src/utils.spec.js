import { getCurrentYear, getFooterCopy } from "./utils";

describe("Utils functions", () => {
  it("getCurrentYear() returns correct year", () => {
    const returnedYear = getCurrentYear();

    // Expected year
    const currentYear = () => {
      const date = new Date();
      return date.getFullYear();
    };

    // Assert functions return value
    expect(returnedYear).toEqual(currentYear());
  });

  it("getFooterCopy() returns string depend on arg", () => {
    const isFooterCopy = "Holberton School";
    const isNotFooterCopy = "Holberton School main dashboard";

    // Assert functions return value
    expect(getFooterCopy(true)).toEqual(isFooterCopy);
    expect(getFooterCopy(false)).toEqual(isNotFooterCopy);
  });
});
