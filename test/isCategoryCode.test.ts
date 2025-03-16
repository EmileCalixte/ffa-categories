import { describe, expect, it } from "vitest";
import { ALL_CATEGORY_CODES, isCategoryCode } from "../src";

describe("Is category code", () => {
  const validCategoryCodes = [
    "BB",
    "EA",
    "PO",
    "BE",
    "MI",
    "CA",
    "JU",
    "ES",
    "SE",
    "VE",
    "V1",
    "V2",
    "V3",
    "V4",
    "V5",
    "MA",
    "M0",
    "M1",
    "M2",
    "M3",
    "M4",
    "M5",
    "M6",
    "M7",
    "M8",
    "M9",
    "M10",
  ];

  const invalidCategoryCodes = ["", "AA", "IN", "bb", "any string"];

  it("If this test fails, it's probably because the list of all valid test cases is invalid or incomplete", () => {
    expect(validCategoryCodes.length).toBe(ALL_CATEGORY_CODES.length);
  });

  for (const code of validCategoryCodes) {
    it(`Test that ${code} is a valid category code`, () => {
      expect(isCategoryCode(code)).toBe(true);
    });
  }

  for (const code of invalidCategoryCodes) {
    it(`Test that ${code} is an invalid category code`, () => {
      expect(isCategoryCode(code)).toBe(false);
    });
  }
});
