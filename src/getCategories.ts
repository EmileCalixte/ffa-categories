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
} from "./constants/categories";
import type { CategoryList } from "./types/categories";

function getCategoryLists(date: Date): [CategoryList, CategoryList] {
  const time = date.getTime();

  if (time >= new Date("2024-09-01T00:00:00").getTime()) {
    return [CATEGORIES_2025_AND_AFTER, DETAILED_CATEGORIES_2025_AND_AFTER];
  }

  if (time >= new Date("2022-09-01T00:00:00").getTime()) {
    return [CATEGORIES_2023_TO_2024, DETAILED_CATEGORIES_2023_TO_2024];
  }

  if (time >= new Date("2019-11-01T00:00:00").getTime()) {
    return [CATEGORIES_2020_TO_2022, DETAILED_CATEGORIES_2020_TO_2022];
  }

  if (time >= new Date("2015-11-01T00:00:00").getTime()) {
    return [CATEGORIES_2016_TO_2019, DETAILED_CATEGORIES_2016_TO_2019];
  }

  return [CATEGORIES_2015_AND_BEFORE, DETAILED_CATEGORIES_2015_AND_BEFORE];
}

/**
 * Returns list of categories existing at a given date
 * @param date - The date for which categories should be retrieved. Default: current date
 * @param detailed - Whether or not to return detailed list (with detailes "Vétérans" or "Masters" categories). Default: true
 * @returns The category list
 */
export function getCategoryList(date: Date = new Date(), detailed = true): CategoryList {
  return getCategoryLists(date)[Number(detailed)];
}
