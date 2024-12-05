import { describe, expect, it } from "vitest";
import { getCategoryList } from "../src/getCategories";
import {
  CATEGORIES_2015_AND_BEFORE,
  CATEGORIES_2016_TO_2019,
  CATEGORIES_2020_TO_2022,
  CATEGORIES_2023_TO_2024,
  CATEGORIES_2025_AND_AFTER,
  DETAILED_CATEGORIES_2015_AND_BEFORE,
  DETAILED_CATEGORIES_2016_TO_2019,
  DETAILED_CATEGORIES_2020_TO_2022,
  DETAILED_CATEGORIES_2023_TO_2024,
  DETAILED_CATEGORIES_2025_AND_AFTER,
} from "../src/constants/categories";

describe("Category list depending on date", () => {
  const testCases = [
    [["2015-10-31T23:59:59"], [CATEGORIES_2015_AND_BEFORE, DETAILED_CATEGORIES_2015_AND_BEFORE]],
    [
      ["2015-11-01T00:00:00", "2019-10-31T23:59:59"],
      [CATEGORIES_2016_TO_2019, DETAILED_CATEGORIES_2016_TO_2019],
    ],
    [
      ["2019-11-01T00:00:00", "2022-08-31T23:59:59"],
      [CATEGORIES_2020_TO_2022, DETAILED_CATEGORIES_2020_TO_2022],
    ],
    [
      ["2022-09-01T00:00:00", "2024-08-31T23:59:59"],
      [CATEGORIES_2023_TO_2024, DETAILED_CATEGORIES_2023_TO_2024],
    ],
    [["2024-09-01T00:00:00"], [CATEGORIES_2025_AND_AFTER, DETAILED_CATEGORIES_2025_AND_AFTER]],
  ] as const;

  for (const [dates, [categoryList, detailedCategoryList]] of testCases) {
    for (const date of dates) {
      describe(date, () => {
        it("List", () => {
          expect(getCategoryList(new Date(date), false)).toEqual(categoryList);
        });

        it("Detailed list", () => {
          expect(getCategoryList(new Date(date))).toEqual(detailedCategoryList);
        });
      });
    }
  }
});
