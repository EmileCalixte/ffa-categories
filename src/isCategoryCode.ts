import { ALL_CATEGORY_CODES } from "./constants/categories";
import type { CategoryCode } from "./types/categories";

/**
 * @param value The value to be checked
 * @returns True if value is a valid category code, false otherwise
 *
 * @example
 * ```ts
 * isCategoryCode("BB") // Returns true
 * isCategoryCode("SE") // Returns true
 * isCategoryCode("VE") // Returns true
 * isCategoryCode("V2") // Returns true
 * isCategoryCode("MA") // Returns true
 * isCategoryCode("M10") // Returns true
 * isCategoryCode("IN") // Returns false
 * isCategoryCode("any invalid string") // Returns false
 * ```
 */
export function isCategoryCode(value: string): value is CategoryCode {
  return (ALL_CATEGORY_CODES as string[]).includes(value);
}
