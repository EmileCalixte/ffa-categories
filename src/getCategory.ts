import { getApplicableCategoriesYear } from "./getApplicableCategoriesYear";
import { getCategoryList, getCategoryMinAges } from "./getCategories";
import type { CategoryCode, CategoryData, CategoryList } from "./types/categories";

function getCategoryDataFromCode(code: CategoryCode, categories: CategoryList): CategoryData {
  const name = categories[code];

  if (name === undefined) {
    throw new Error(`No category found with code ${code}`);
  }

  return {
    code,
    name,
  };
}

function getCategoryFromAge(date: Date, detailed: boolean, age: number): CategoryData {
  function rtrn(age: number, categoryCode: CategoryCode | null, categories: CategoryList): CategoryData {
    if (categoryCode === null) {
      throw new Error(`No category code found for age ${age}`);
    }

    return getCategoryDataFromCode(categoryCode, categories);
  }

  const normalizedAge = Math.max(0, age);

  const categories = getCategoryList(date, detailed);
  const minAges = getCategoryMinAges(date, detailed);

  let currentCategoryCode: string | null = null;
  for (const [categoryCode, minAge] of Object.entries(minAges).sort(([, minAge1], [, minAge2]) => minAge1 - minAge2)) {
    if (normalizedAge < minAge) {
      return rtrn(normalizedAge, currentCategoryCode as CategoryCode | null, categories);
    }

    currentCategoryCode = categoryCode;
  }

  return rtrn(normalizedAge, currentCategoryCode as CategoryCode | null, categories);
}

interface GetCategoryOptions {
  /**
   * The date for which the category code should be determined
   * Default: current date
   */
  date: Date;

  /**
   * Whether or not to return a detailed code when applicable (e.g. for category Master 2, return `"M2"` if `true`, `"MA"` if `false`).
   * Default: `true`
   */
  detailed: boolean;
}

/**
 * Computes the category code corresponding to the birth year provided on the date provided, or on the current date if no date is provided
 * @param birthYear - The birth year for which the category code should be determined
 * @param options - Additional options
 * @returns The category  corresponding to the birth year and date provided
 *
 * @example
 * ```ts
 * getCategory(2002, { date: new Date("2021-10-29") }); // Returns { code: "JU", name: "Juniors" }
 * getCategory(2002, { date: new Date("2021-11-01") }); // Returns { code: "ES", name: "Espoirs" }
 * getCategory(1970, { date: new Date("2025-01-01") }); // Returns { code: "M4", name: "Masters 4" }
 * getCategory(1970, { date: new Date("2025-01-01"), detailed: false }); // Returns { code: "MA", name: "Masters" }
 * getCategory(1970, { date: new Date("2015-01-01") }); // Returns { code: "V1", name: "Vétérans 1" }
 * getCategory(1970, { date: new Date("2015-01-01"), detailed: false }); // Returns { code: "VE", name: "Vétérans" }
 * ```
 */
export function getCategory(birthYear: number, options: Partial<GetCategoryOptions> = {}): CategoryData {
  const date = options.date ?? new Date();
  const detailed = options.detailed ?? true;

  /**
   * This is not the real age, but the age calculated based on the categories applicable on the date provided.
   * @see getApplicableCategoriesYear
   */
  const applicableAge = getApplicableCategoriesYear(date) - birthYear;

  return getCategoryFromAge(date, detailed, applicableAge);
}
