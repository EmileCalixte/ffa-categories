import { DATE_MONTH_NOVEMBER, DATE_MONTH_SEPTEMBER } from "./constants/dates";

/**
 * Returns the year of the categories applicable at the date provided
 *
 * Over the years, the day and month on which the categories change has evolved
 * - Until 2013, the categories changed every January 1st
 * - Between 2014 and 2021, the categories changed every November 1st: from November 1 of year N, the categories of year N+1 are applied until October 31 of year N+1, and so on
 * - Since 2022, the categories changed every September 1st: from September 1 of year N, the categories of year N+1 are applied until August 31 of year N+1, and so on
 *
 * @param date - The date for which the categories' year should be retrieved
 * @returns The corresponding year
 *
 * @example
 * ```ts
 * getApplicableCategoriesYear(new Date("2000-01-01")) // Returns 2000
 * getApplicableCategoriesYear(new Date("2013-12-31")) // Returns 2013
 * getApplicableCategoriesYear(new Date("2014-10-31")) // Returns 2014
 * getApplicableCategoriesYear(new Date("2014-11-01")) // Returns 2015
 * getApplicableCategoriesYear(new Date("2015-10-31")) // Returns 2015
 * getApplicableCategoriesYear(new Date("2015-11-01")) // Returns 2016
 * getApplicableCategoriesYear(new Date("2022-08-31")) // Returns 2022
 * getApplicableCategoriesYear(new Date("2022-09-01")) // Returns 2023
 * getApplicableCategoriesYear(new Date("2023-08-31")) // Returns 2023
 * getApplicableCategoriesYear(new Date("2023-09-01")) // Returns 2024
 * ```
 */
export function getApplicableCategoriesYear(date: Date): number {
  const time = date.getTime();
  const year = date.getFullYear();

  if (time >= new Date("2022-09-01T00:00:00").getTime()) {
    // Since September 1st 2022, categories change on September 1st
    return date.getMonth() >= DATE_MONTH_SEPTEMBER ? year + 1 : year;
  }

  if (time >= new Date("2014-11-01T00:00:00").getTime()) {
    // Between November 1st 2014 and August 31 2022, categories change on November 1st
    return date.getMonth() >= DATE_MONTH_NOVEMBER ? year + 1 : year;
  }

  // Before 2014, categories change on January 1st
  return year;
}
