import type { CategoryCode } from "./types/categories";

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

const DEFAULT_OPTIONS: GetCategoryOptions = {
  date: new Date(),
  detailed: true,
};

/**
 * Computes the category code corresponding to the birth year provided on the date provided, or on the current date if no date is provided
 * @param birthYear - The birth year for which the category code should be determined
 * @param options - Additional options
 * @returns The category  corresponding to the birth year and date provided
 *
 * @example
 * ```ts
 * getCategoryCode(2002, { date: new Date("2021-10-29") }); // Returns { code: "JU", name: "Juniors" }
 * getCategoryCode(2002, { date: new Date("2021-11-01") }); // Returns { code: "ES", name: "Espoirs" }
 * getCategoryCode(1970, { date: new Date("2025-01-01") }); // Returns { code: "M4", name: "Masters 4" }
 * getCategoryCode(1970, { date: new Date("2025-01-01"), detailed: false }); // Returns { code: "MA", name: "Masters" }
 * getCategoryCode(1970, { date: new Date("2015-01-01") }); // Returns { code: "V1", name: "Vétérans 1" }
 * getCategoryCode(1970, { date: new Date("2015-01-01"), detailed: false }); // Returns { code: "VE", name: "Vétérans" }
 * ```
 */
export function getCategory(
  birthYear: number,
  options: Partial<GetCategoryOptions> = {},
): { code: CategoryCode; name: string } {
  options = Object.assign(DEFAULT_OPTIONS, options);

  //   const { date, detailed } = options;

  return { code: "V1", name: "Masters 1" }; // TODO
}
