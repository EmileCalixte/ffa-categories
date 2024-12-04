import type { CategoryCode } from "./types/categories";

interface GetCategoryCodeOptions {
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

const DEFAULT_OPTIONS: GetCategoryCodeOptions = {
  date: new Date(),
  detailed: true,
};

/**
 * Computes the category code corresponding to the birth year provided on the date provided, or on the current date if no date is provided
 * @param birthYear - The birth year for which the category code should be determined
 * @param options - Additional options
 * @returns The category code corresponding to the birth year and date provided
 *
 * @example
 * ```ts
 * getCategoryCode(2002, { date: new Date(2021-10-29) }); // Returns "JU"
 * getCategoryCode(2002, { date: new Date(2021-11-01) }); // Returns "ES"
 * getCategoryCode(1970, { date: new Date(2025-01-01) }); // Returns "M4"
 * getCategoryCode(1970, { date: new Date(2025-01-01), detailed: false }); // Returns "MA"
 * getCategoryCode(1970, { date: new Date(2015-01-01) }); // Returns "V1"
 * getCategoryCode(1970, { date: new Date(2015-01-01), detailed: false }); // Returns "VE"
 * ```
 */
export function getCategoryCode(birthYear: number, options: Partial<GetCategoryCodeOptions> = {}): CategoryCode {
  options = Object.assign(DEFAULT_OPTIONS, options);

  return "V1"; // TODO
}
