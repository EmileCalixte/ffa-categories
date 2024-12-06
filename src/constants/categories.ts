import type { CategoryListMinAge } from "../types/categories";
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

export const CATEGORIES_2015_AND_BEFORE_MIN_AGE: CategoryListMinAge<typeof CATEGORIES_2015_AND_BEFORE> = {
  EA: 0,
  PO: 10,
  BE: 12,
  MI: 14,
  CA: 16,
  JU: 18,
  ES: 20,
  SE: 23,
  VE: 40,
};

/**
 * Categories that existed until 2015 with detailed "Vétérans" categories
 */
export const DETAILED_CATEGORIES_2015_AND_BEFORE = {
  ...excludeKeys(CATEGORIES_2015_AND_BEFORE, ["VE"]),
  V1: "Vétérans 1",
  V2: "Vétérans 2",
  V3: "Vétérans 3",
  V4: "Vétérans 4",
} as const;

export const DETAILED_CATEGORIES_2015_AND_BEFORE_MIN_AGE: CategoryListMinAge<
  typeof DETAILED_CATEGORIES_2015_AND_BEFORE
> = {
  ...excludeKeys(CATEGORIES_2015_AND_BEFORE_MIN_AGE, ["VE"]),
  V1: 40,
  V2: 50,
  V3: 60,
  V4: 70,
};

/**
 * Categories that existed from 2016 to 2019
 */
export const CATEGORIES_2016_TO_2019 = {
  BB: "Baby Athlé",
  ...CATEGORIES_2015_AND_BEFORE,
  VE: "Masters",
} as const;

export const CATEGORIES_2016_TO_2019_MIN_AGE: CategoryListMinAge<typeof CATEGORIES_2016_TO_2019> = {
  BB: 0,
  ...excludeKeys(CATEGORIES_2015_AND_BEFORE_MIN_AGE, ["EA"]),
  EA: 7,
};

/**
 * Categories that existed from 2016 to 2019 with detailed "Masters" categories
 */
export const DETAILED_CATEGORIES_2016_TO_2019 = {
  ...excludeKeys(CATEGORIES_2016_TO_2019, ["VE"]),
  V1: "Masters 1",
  V2: "Masters 2",
  V3: "Masters 3",
  V4: "Masters 4",
  V5: "Masters 5",
} as const;

export const DETAILED_CATEGORIES_2016_TO_2019_MIN_AGE: CategoryListMinAge<typeof DETAILED_CATEGORIES_2016_TO_2019> = {
  ...excludeKeys(CATEGORIES_2016_TO_2019_MIN_AGE, ["VE"]),
  V1: 40,
  V2: 50,
  V3: 60,
  V4: 70,
  V5: 80,
};

/**
 * Categories that existed from 2020 to 2022 (equal to those of 2016 to 2019 because only the detailed “Masters” categories have changed in 2020)
 */
export const CATEGORIES_2020_TO_2022 = CATEGORIES_2016_TO_2019;

export const CATEGORIES_2020_TO_2022_MIN_AGE: CategoryListMinAge<typeof CATEGORIES_2020_TO_2022> = {
  ...excludeKeys(CATEGORIES_2016_TO_2019_MIN_AGE, ["VE"]),
  VE: 35,
};

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
  ...excludeKeys(CATEGORIES_2020_TO_2022, ["VE"]),
  ...DETAILED_MASTERS_CATEGORIES_2020_AND_AFTER,
} as const;

export const DETAILED_CATEGORIES_2020_TO_2022_MIN_AGE: CategoryListMinAge<typeof DETAILED_CATEGORIES_2020_TO_2022> = {
  ...excludeKeys(CATEGORIES_2020_TO_2022_MIN_AGE, ["VE"]),
  M0: 35,
  M1: 40,
  M2: 45,
  M3: 50,
  M4: 55,
  M5: 60,
  M6: 65,
  M7: 70,
  M8: 75,
  M9: 80,
  M10: 85,
};

/**
 * Categories that existed from 2023 to 2024
 */
export const CATEGORIES_2023_TO_2024 = {
  ...CATEGORIES_2020_TO_2022,
  EA: "Éveil Athlétique",
} as const;

/**
 * Equal to 2020-2022, only EA name changed
 */
export const CATEGORIES_2023_TO_2024_MIN_AGE: CategoryListMinAge<typeof CATEGORIES_2023_TO_2024> =
  CATEGORIES_2020_TO_2022_MIN_AGE;

/**
 * Categories that existed from 2023 to 2024 with detailed "Masters" categories
 */
export const DETAILED_CATEGORIES_2023_TO_2024 = {
  ...excludeKeys(CATEGORIES_2023_TO_2024, ["VE"]),
  ...DETAILED_MASTERS_CATEGORIES_2020_AND_AFTER,
} as const;

/**
 * Equal to 2020-2022, only EA name changed
 */
export const DETAILED_CATEGORIES_2023_TO_2024_MIN_AGE: CategoryListMinAge<typeof DETAILED_CATEGORIES_2023_TO_2024> =
  DETAILED_CATEGORIES_2020_TO_2022_MIN_AGE;

/**
 * Existing categories since 2025
 */
export const CATEGORIES_2025_AND_AFTER = {
  ...excludeKeys(CATEGORIES_2023_TO_2024, ["VE"]),
  MA: "Masters",
} as const;

export const CATEGORIES_2025_AND_AFTER_MIN_AGE: CategoryListMinAge<typeof CATEGORIES_2025_AND_AFTER> = {
  ...excludeKeys(CATEGORIES_2023_TO_2024_MIN_AGE, ["VE"]),
  MA: CATEGORIES_2023_TO_2024_MIN_AGE.VE,
};

/**
 * Existing categories since 2025 with detailed "Masters" categories
 */
export const DETAILED_CATEGORIES_2025_AND_AFTER = {
  ...excludeKeys(CATEGORIES_2025_AND_AFTER, ["MA"]),
  ...DETAILED_MASTERS_CATEGORIES_2020_AND_AFTER,
} as const;

/**
 * Equal to 2023-2024, only VE became MA but it's not in this list
 */
export const DETAILED_CATEGORIES_2025_AND_AFTER_MIN_AGE: CategoryListMinAge<typeof DETAILED_CATEGORIES_2025_AND_AFTER> =
  DETAILED_CATEGORIES_2023_TO_2024_MIN_AGE;

/**
 * All existing category codes
 */
export const ALL_CATEGORY_CODES = objectKeys({
  ...CATEGORIES_2015_AND_BEFORE,
  ...DETAILED_CATEGORIES_2015_AND_BEFORE,
  ...CATEGORIES_2016_TO_2019,
  ...DETAILED_CATEGORIES_2016_TO_2019,
  ...CATEGORIES_2020_TO_2022,
  ...DETAILED_CATEGORIES_2020_TO_2022,
  ...CATEGORIES_2023_TO_2024,
  ...DETAILED_CATEGORIES_2023_TO_2024,
  ...CATEGORIES_2025_AND_AFTER,
  ...DETAILED_CATEGORIES_2025_AND_AFTER,
});
