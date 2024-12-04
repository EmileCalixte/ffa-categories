import { excludeKeys, objectKeys } from "../utils/objectUtils";

/**
 * Categories that existed until 2015 (History prior to 2012 is not guaranteed)
 */
export const CATEGORIES_2015_AND_BEFORE = {
  EA: "École d'Athlétisme",
  PO: "Poussins",
  BE: "Benjamins",
  MI: "Minimes",
  CA: "Cadets",
  JU: "Juniors",
  ES: "Espoirs",
  SE: "Seniors",
  VE: "Vétérans",
} as const;

/**
 * Categories that existed until 2015 with detailed "Vétérans" categories
 */
export const DETAILED_CATEGORIES_2015_AND_BEFORE = {
  ...CATEGORIES_2015_AND_BEFORE,
  V1: "Vétérans 1",
  V2: "Vétérans 2",
  V3: "Vétérans 3",
  V4: "Vétérans 4",
} as const;

/**
 * Categories that existed from 2016 to 2019
 */
export const CATEGORIES_2016_TO_2019 = {
  BB: "Baby Athlé",
  ...CATEGORIES_2015_AND_BEFORE,
  VE: "Masters",
} as const;

/**
 * Categories that existed from 2016 to 2019 with detailed "Masters" categories
 */
export const DETAILED_CATEGORIES_2016_TO_2019 = {
  ...CATEGORIES_2016_TO_2019,
  V1: "Masters 1",
  V2: "Masters 2",
  V3: "Masters 3",
  V4: "Masters 4",
  V5: "Masters 5",
} as const;

/**
 * Categories that existed from 2020 to 2022 (equal to those of 2016 to 2019 because only the detailed “Masters” categories have changed in 2020)
 */
export const CATEGORIES_2020_TO_2022 = CATEGORIES_2016_TO_2019;

const DETAILED_MASTERS_CATEGORIES_2020_AND_AFTER = {
  M0: "Masters 0",
  M1: "Masters 1",
  M2: "Masters 2",
  M3: "Masters 3",
  M4: "Masters 4",
  M5: "Masters 5",
  M6: "Masters 6",
  M7: "Masters 7",
  M8: "Masters 8",
  M9: "Masters 9",
  M10: "Masters 10",
} as const;

/**
 * Categories that existed from 2020 to 2022 with detailed "Masters" categories
 */
export const DETAILED_CATEGORIES_2020_TO_2022 = {
  ...CATEGORIES_2020_TO_2022,
  ...DETAILED_MASTERS_CATEGORIES_2020_AND_AFTER,
} as const;

/**
 * Categories that existed from 2023 to 2024
 */
export const CATEGORIES_2023_TO_2024 = {
  ...CATEGORIES_2020_TO_2022,
  EA: "Éveil Athlétique",
} as const;

/**
 * Categories that existed from 2023 to 2024 with detailed "Masters" categories
 */
export const DETAILED_CATEGORIES_2023_TO_2024 = {
  ...CATEGORIES_2023_TO_2024,
  ...DETAILED_MASTERS_CATEGORIES_2020_AND_AFTER,
} as const;

/**
 * Existing categories since 2025
 */
export const CATEGORIES_2025_AND_AFTER = {
  ...excludeKeys(CATEGORIES_2023_TO_2024, ["VE"]),
  MA: "Masters",
} as const;

/**
 * Existing categories since 2025 with detailed "Masters" categories
 */
export const DETAILED_CATEGORIES_2025_AND_AFTER = {
  ...CATEGORIES_2025_AND_AFTER,
  ...DETAILED_MASTERS_CATEGORIES_2020_AND_AFTER,
} as const;

export const ALL_CATEGORY_CODES = objectKeys({
  ...DETAILED_CATEGORIES_2015_AND_BEFORE,
  ...DETAILED_CATEGORIES_2016_TO_2019,
  ...DETAILED_CATEGORIES_2020_TO_2022,
  ...DETAILED_CATEGORIES_2023_TO_2024,
  ...DETAILED_CATEGORIES_2025_AND_AFTER,
});
