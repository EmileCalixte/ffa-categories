import { describe, expect, it } from "vitest";
import { getApplicableCategoriesYear } from "../src/getApplicableCategoriesYear";

describe("Categories year depending on date", () => {
  const testCases = [
    ["2000-01-01", 2000],
    ["2013-12-31", 2013],
    ["2014-10-31", 2014],
    ["2014-11-01", 2015],
    ["2015-10-31", 2015],
    ["2015-11-01", 2016],
    ["2022-08-31", 2022],
    ["2022-09-01", 2023],
    ["2023-08-31", 2023],
    ["2023-09-01", 2024],
  ];

  for (const [date, expected] of testCases) {
    it(`On ${date}, categories of year ${expected} should be applied`, () => {
      expect(getApplicableCategoriesYear(new Date(date))).toBe(expected);
    });
  }
});
