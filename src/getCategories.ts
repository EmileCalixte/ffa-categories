import {
  CATEGORIES_2015_AND_BEFORE,
  CATEGORIES_2015_AND_BEFORE_MIN_AGE,
  CATEGORIES_2016_TO_2019,
  CATEGORIES_2016_TO_2019_MIN_AGE,
  CATEGORIES_2020_TO_2022,
  CATEGORIES_2020_TO_2022_MIN_AGE,
  CATEGORIES_2023_TO_2024,
  CATEGORIES_2023_TO_2024_MIN_AGE,
  CATEGORIES_2025_AND_AFTER,
  CATEGORIES_2025_AND_AFTER_MIN_AGE,
  DETAILED_CATEGORIES_2015_AND_BEFORE,
  DETAILED_CATEGORIES_2015_AND_BEFORE_MIN_AGE,
  DETAILED_CATEGORIES_2016_TO_2019,
  DETAILED_CATEGORIES_2016_TO_2019_MIN_AGE,
  DETAILED_CATEGORIES_2020_TO_2022,
  DETAILED_CATEGORIES_2020_TO_2022_MIN_AGE,
  DETAILED_CATEGORIES_2023_TO_2024,
  DETAILED_CATEGORIES_2023_TO_2024_MIN_AGE,
  DETAILED_CATEGORIES_2025_AND_AFTER,
  DETAILED_CATEGORIES_2025_AND_AFTER_MIN_AGE,
} from "./constants/categories";
import type { CategoryList, CategoryListMinAge } from "./types/categories";

function getCategoryLists(date: Date): [CategoryList, CategoryList, CategoryListMinAge, CategoryListMinAge] {
  const time = date.getTime();

  if (time >= new Date("2024-09-01T00:00:00").getTime()) {
    return [
      CATEGORIES_2025_AND_AFTER,
      DETAILED_CATEGORIES_2025_AND_AFTER,
      CATEGORIES_2025_AND_AFTER_MIN_AGE,
      DETAILED_CATEGORIES_2025_AND_AFTER_MIN_AGE,
    ];
  }

  if (time >= new Date("2022-09-01T00:00:00").getTime()) {
    return [
      CATEGORIES_2023_TO_2024,
      DETAILED_CATEGORIES_2023_TO_2024,
      CATEGORIES_2023_TO_2024_MIN_AGE,
      DETAILED_CATEGORIES_2023_TO_2024_MIN_AGE,
    ];
  }

  if (time >= new Date("2019-11-01T00:00:00").getTime()) {
    return [
      CATEGORIES_2020_TO_2022,
      DETAILED_CATEGORIES_2020_TO_2022,
      CATEGORIES_2020_TO_2022_MIN_AGE,
      DETAILED_CATEGORIES_2020_TO_2022_MIN_AGE,
    ];
  }

  if (time >= new Date("2015-11-01T00:00:00").getTime()) {
    return [
      CATEGORIES_2016_TO_2019,
      DETAILED_CATEGORIES_2016_TO_2019,
      CATEGORIES_2016_TO_2019_MIN_AGE,
      DETAILED_CATEGORIES_2016_TO_2019_MIN_AGE,
    ];
  }

  return [
    CATEGORIES_2015_AND_BEFORE,
    DETAILED_CATEGORIES_2015_AND_BEFORE,
    CATEGORIES_2015_AND_BEFORE_MIN_AGE,
    DETAILED_CATEGORIES_2015_AND_BEFORE_MIN_AGE,
  ];
}

/**
 * Returns list of categories existing at a given date
 * @param date - The date for which categories should be retrieved. Default: current date
 * @param detailed - Whether or not to return detailed list (with detailed "Vétérans" or "Masters" categories). Default: true
 * @returns The category list
 */
export function getCategoryList(date: Date = new Date(), detailed = true): CategoryList {
  return getCategoryLists(date)[detailed ? 1 : 0];
}

export function getCategoryMinAges(date: Date, detailed = true): CategoryListMinAge {
  return getCategoryLists(date)[detailed ? 3 : 2];
}
