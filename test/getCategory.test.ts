import { describe, expect, it } from "vitest";
import { getCategory } from "../src";

describe("Category depending on date and birth date", () => {
  const testCases = [
    [
      "Category evolution for somebody born in 1934",
      [
        [1934, "2012-01-01T00:00:00", { code: "VE", name: "Vétérans" }, { code: "V4", name: "Vétérans 4" }],
        [1934, "2015-10-31T23:59:59", { code: "VE", name: "Vétérans" }, { code: "V4", name: "Vétérans 4" }],
        [1934, "2015-11-01T00:00:00", { code: "VE", name: "Masters" }, { code: "V5", name: "Masters 5" }], // 'Vétérans' are now named 'Masters', with a new 5th sub-category
        [1934, "2019-10-31T23:59:59", { code: "VE", name: "Masters" }, { code: "V5", name: "Masters 5" }],
        [1934, "2019-11-01T00:00:00", { code: "VE", name: "Masters" }, { code: "M10", name: "Masters 10" }], // 'Masters' categories are now split in 10 sub-categories instead of 5, with new 'Mx' code
        [1934, "2024-08-31T23:59:59", { code: "VE", name: "Masters" }, { code: "M10", name: "Masters 10" }],
        [1934, "2024-09-01T00:00:00", { code: "MA", name: "Masters" }, { code: "M10", name: "Masters 10" }], // Code 'VE' becomes 'MA' from September 1st 2024 (2025 categories)
      ],
    ],
    [
      "Category evolution for somebody born in 1943",
      [
        [1943, "2012-01-01T00:00:00", { code: "VE", name: "Vétérans" }, { code: "V3", name: "Vétérans 3" }],
        [1943, "2012-12-31T23:59:59", { code: "VE", name: "Vétérans" }, { code: "V3", name: "Vétérans 3" }],
        [1943, "2013-01-01T00:00:00", { code: "VE", name: "Vétérans" }, { code: "V4", name: "Vétérans 4" }],
        [1943, "2015-10-31T23:59:59", { code: "VE", name: "Vétérans" }, { code: "V4", name: "Vétérans 4" }],
        [1943, "2015-11-01T00:00:00", { code: "VE", name: "Masters" }, { code: "V4", name: "Masters 4" }], // 'Vétérans' are now named 'Masters'
        [1943, "2019-10-31T23:59:59", { code: "VE", name: "Masters" }, { code: "V4", name: "Masters 4" }],
        [1943, "2019-11-01T00:00:00", { code: "VE", name: "Masters" }, { code: "M8", name: "Masters 8" }], // 'Masters' categories are now split in 10 sub-categories instead of 5, with new 'Mx' code
        [1943, "2022-08-31T23:59:59", { code: "VE", name: "Masters" }, { code: "M8", name: "Masters 8" }],
        [1943, "2022-09-01T00:00:00", { code: "VE", name: "Masters" }, { code: "M9", name: "Masters 9" }], // First time categories change on September 1st
        [1943, "2024-08-31T23:59:59", { code: "VE", name: "Masters" }, { code: "M9", name: "Masters 9" }],
        [1943, "2024-09-01T00:00:00", { code: "MA", name: "Masters" }, { code: "M9", name: "Masters 9" }], // Code 'VE' becomes 'MA' from September 1st 2024 (2025 categories)
      ],
    ],
    [
      "Category evolution for somebody born in 1957",
      [
        [1957, "2012-01-01T00:00:00", { code: "VE", name: "Vétérans" }, { code: "V2", name: "Vétérans 2" }],
        [1957, "2015-10-31T23:59:59", { code: "VE", name: "Vétérans" }, { code: "V2", name: "Vétérans 2" }],
        [1957, "2015-11-01T00:00:00", { code: "VE", name: "Masters" }, { code: "V2", name: "Masters 2" }], // 'Vétérans' are now named 'Masters'
        [1957, "2016-10-31T23:59:59", { code: "VE", name: "Masters" }, { code: "V2", name: "Masters 2" }],
        [1957, "2016-11-01T00:00:00", { code: "VE", name: "Masters" }, { code: "V3", name: "Masters 3" }],
        [1957, "2019-10-31T23:59:59", { code: "VE", name: "Masters" }, { code: "V3", name: "Masters 3" }],
        [1957, "2019-11-01T00:00:00", { code: "VE", name: "Masters" }, { code: "M5", name: "Masters 5" }], // 'Masters' categories are now split in 10 sub-categories instead of 5, with new 'Mx' code
        [1957, "2021-10-31T23:59:59", { code: "VE", name: "Masters" }, { code: "M5", name: "Masters 5" }],
        [1957, "2021-11-01T00:00:00", { code: "VE", name: "Masters" }, { code: "M6", name: "Masters 6" }],
        [1957, "2024-08-31T23:59:59", { code: "VE", name: "Masters" }, { code: "M6", name: "Masters 6" }],
        [1957, "2024-09-01T00:00:00", { code: "MA", name: "Masters" }, { code: "M6", name: "Masters 6" }], // Code 'VE' becomes 'MA' from September 1st 2024 (2025 categories)
      ],
    ],
    [
      "Category evolution for somebody born in 1975",
      [
        [1975, "2012-01-01T00:00:00", { code: "SE", name: "Seniors" }],
        [1975, "2014-10-31T23:59:59", { code: "SE", name: "Seniors" }],
        [1975, "2014-11-01T00:00:00", { code: "VE", name: "Vétérans" }, { code: "V1", name: "Vétérans 1" }],
        [1975, "2015-10-31T23:59:59", { code: "VE", name: "Vétérans" }, { code: "V1", name: "Vétérans 1" }],
        [1975, "2015-11-01T00:00:00", { code: "VE", name: "Masters" }, { code: "V1", name: "Masters 1" }], // 'Vétérans' are now named 'Masters'
        [1975, "2019-10-31T23:59:59", { code: "VE", name: "Masters" }, { code: "V1", name: "Masters 1" }],
        [1975, "2019-11-01T00:00:00", { code: "VE", name: "Masters" }, { code: "M2", name: "Masters 2" }], // 'Masters' categories are now split in 10 sub-categories instead of 5, with new 'Mx' code
        [1975, "2024-08-31T23:59:59", { code: "VE", name: "Masters" }, { code: "M2", name: "Masters 2" }],
        [1975, "2024-09-01T00:00:00", { code: "MA", name: "Masters" }, { code: "M3", name: "Masters 3" }], // Code 'VE' becomes 'MA' from September 1st 2024 (2025 categories)
      ],
    ],
    [
      "Category evolution for somebody born in 1984",
      [
        [1984, "2012-01-01T00:00:00", { code: "SE", name: "Seniors" }],
        [1984, "2019-10-31T23:59:59", { code: "SE", name: "Seniors" }],
        [1984, "2019-11-01T00:00:00", { code: "VE", name: "Masters" }, { code: "M0", name: "Masters 0" }], // 'Masters' categories are now split in 10 sub-categories instead of 5 and takes effect 5 years younger
        [1984, "2023-08-31T23:59:59", { code: "VE", name: "Masters" }, { code: "M0", name: "Masters 0" }],
        [1984, "2023-09-01T00:00:00", { code: "VE", name: "Masters" }, { code: "M1", name: "Masters 1" }],
        [1984, "2024-08-31T23:59:59", { code: "VE", name: "Masters" }, { code: "M1", name: "Masters 1" }],
        [1984, "2024-09-01T00:00:00", { code: "MA", name: "Masters" }, { code: "M1", name: "Masters 1" }], // Code 'VE' becomes 'MA' from September 1st 2024 (2025 categories)
      ],
    ],
    [
      "Category evolution for somebody born in 1989",
      [
        [1989, "2011-01-01T00:00:00", { code: "ES", name: "Espoirs" }],
        [1989, "2011-12-31T23:59:59", { code: "ES", name: "Espoirs" }],
        [1989, "2012-01-01T00:00:00", { code: "SE", name: "Seniors" }],
        [1989, "2023-08-31T23:59:59", { code: "SE", name: "Seniors" }],
        [1989, "2023-09-01T00:00:00", { code: "VE", name: "Masters" }, { code: "M0", name: "Masters 0" }],
        [1989, "2024-08-31T23:59:59", { code: "VE", name: "Masters" }, { code: "M0", name: "Masters 0" }],
        [1989, "2024-09-01T00:00:00", { code: "MA", name: "Masters" }, { code: "M0", name: "Masters 0" }], // Code 'VE' becomes 'MA' from September 1st 2024 (2025 categories)
      ],
    ],
    [
      "Category evolution for somebody born in 2002",
      [
        [2002, "2012-01-01T00:00:00", { code: "PO", name: "Poussins" }],
        [2002, "2013-12-31T23:59:59", { code: "PO", name: "Poussins" }],
        [2002, "2014-01-01T00:00:00", { code: "BE", name: "Benjamins" }],
        [2002, "2015-10-31T23:59:59", { code: "BE", name: "Benjamins" }],
        [2002, "2015-11-01T00:00:00", { code: "MI", name: "Minimes" }],
        [2002, "2017-10-31T23:59:59", { code: "MI", name: "Minimes" }],
        [2002, "2017-11-01T00:00:00", { code: "CA", name: "Cadets" }],
        [2002, "2019-10-31T23:59:59", { code: "CA", name: "Cadets" }],
        [2002, "2019-11-01T00:00:00", { code: "JU", name: "Juniors" }],
        [2002, "2021-10-31T23:59:59", { code: "JU", name: "Juniors" }],
        [2002, "2021-11-01T00:00:00", { code: "ES", name: "Espoirs" }],
        [2002, "2024-08-31T23:59:59", { code: "ES", name: "Espoirs" }],
        [2002, "2024-09-01T00:00:00", { code: "SE", name: "Seniors" }],
      ],
    ],
    [
      "Category evolution for somebody born in 2005",
      [
        [2005, "2012-01-01T00:00:00", { code: "EA", name: "École d'Athlétisme" }],
        [2005, "2014-10-31T23:59:59", { code: "EA", name: "École d'Athlétisme" }],
        [2005, "2014-11-01T00:00:00", { code: "PO", name: "Poussins" }], // First time categories change on November 1st
        [2005, "2016-10-31T23:59:59", { code: "PO", name: "Poussins" }],
        [2005, "2016-11-01T00:00:00", { code: "BE", name: "Benjamins" }],
        [2005, "2018-10-31T23:59:59", { code: "BE", name: "Benjamins" }],
        [2005, "2018-11-01T00:00:00", { code: "MI", name: "Minimes" }],
        [2005, "2020-10-31T23:59:59", { code: "MI", name: "Minimes" }],
        [2005, "2020-11-01T00:00:00", { code: "CA", name: "Cadets" }],
        [2005, "2022-08-31T23:59:59", { code: "CA", name: "Cadets" }],
        [2005, "2022-09-01T00:00:00", { code: "JU", name: "Juniors" }], // First time categories change on September 1st
        [2005, "2024-08-31T23:59:59", { code: "JU", name: "Juniors" }],
        [2005, "2024-09-01T00:00:00", { code: "ES", name: "Espoirs" }],
        [2005, "2027-08-31T23:59:59", { code: "ES", name: "Espoirs" }],
        [2005, "2027-09-01T00:00:00", { code: "SE", name: "Seniors" }],
      ],
    ],
    [
      "Category evolution for somebody born in 2015",
      [
        [2015, "2015-01-01T00:00:00", { code: "EA", name: "École d'Athlétisme" }],
        [2015, "2015-10-31T23:59:59", { code: "EA", name: "École d'Athlétisme" }],
        [2015, "2015-11-01T00:00:00", { code: "BB", name: "Baby Athlé" }], // This category did not exist before this date
        [2015, "2021-10-31T23:59:59", { code: "BB", name: "Baby Athlé" }],
        [2015, "2021-11-01T00:00:00", { code: "EA", name: "École d'Athlétisme" }],
        [2015, "2022-08-31T23:59:59", { code: "EA", name: "École d'Athlétisme" }],
        [2015, "2022-09-01T00:00:00", { code: "EA", name: "Éveil Athlétique" }], // First time categories change on September 1st
        [2015, "2024-08-31T23:59:59", { code: "EA", name: "Éveil Athlétique" }],
        [2015, "2024-09-01T00:00:00", { code: "PO", name: "Poussins" }],
        [2015, "2026-08-31T23:59:59", { code: "PO", name: "Poussins" }],
        [2015, "2026-09-01T00:00:00", { code: "BE", name: "Benjamins" }],
      ],
    ],
    [
      "Category evolution for somebody born in 2018",
      [
        [2018, "2018-01-01T00:00:00", { code: "BB", name: "Baby Athlé" }],
        [2018, "2024-08-31T23:59:59", { code: "BB", name: "Baby Athlé" }],
        [2018, "2024-09-01T00:00:00", { code: "EA", name: "Éveil Athlétique" }],
        [2018, "2027-08-31T23:59:59", { code: "EA", name: "Éveil Athlétique" }],
        [2018, "2027-09-01T00:00:00", { code: "PO", name: "Poussins" }],
      ],
    ],
    [
      "Category evolution for somebody born in 2020",
      [
        [2020, "2020-01-01T00:00:00", { code: "BB", name: "Baby Athlé" }],
        [2020, "2022-03-12T12:34:56", { code: "BB", name: "Baby Athlé" }],
        [2020, "2023-11-04T00:00:00", { code: "BB", name: "Baby Athlé" }],
        [2020, "2026-08-31T23:59:59", { code: "BB", name: "Baby Athlé" }],
        [2020, "2026-09-01T00:00:00", { code: "EA", name: "Éveil Athlétique" }],
      ],
    ],
    [
      "Negative age should be considered as the youngest category",
      [
        [2025, "2024-10-01T00:00:00", { code: "BB", name: "Baby Athlé" }],
        [2017, "2015-12-01T00:00:00", { code: "BB", name: "Baby Athlé" }],
        [2017, "2014-03-01T00:00:00", { code: "EA", name: "École d'Athlétisme" }],
      ],
    ],
    [
      "New 'Baby Athlé' category from 2015-11-01",
      [
        [2011, "2015-10-31T23:59:59", { code: "EA", name: "École d'Athlétisme" }],
        [2011, "2015-11-01T00:00:00", { code: "BB", name: "Baby Athlé" }],
      ],
    ],
    [
      "'Vétérans' becomes 'Masters' on 2015-11-01",
      [
        [1960, "2015-10-31T23:59:59", { code: "VE", name: "Vétérans" }, { code: "V2", name: "Vétérans 2" }],
        [1960, "2015-11-01T00:00:00", { code: "VE", name: "Masters" }, { code: "V2", name: "Masters 2" }],
      ],
    ],
    [
      "New 'Masters' categories from 2019-11-01",
      [
        [1983, "2019-10-31T23:59:59", { code: "SE", name: "Seniors" }],
        [1983, "2019-11-01T00:00:00", { code: "VE", name: "Masters" }, { code: "M0", name: "Masters 0" }],

        [1969, "2019-10-31T23:59:59", { code: "VE", name: "Masters" }, { code: "V2", name: "Masters 2" }],
        [1969, "2019-11-01T00:00:00", { code: "VE", name: "Masters" }, { code: "M3", name: "Masters 3" }],
      ],
    ],
    [
      "'École d'Athlétisme' becomes 'Éveil Athlétique' on 2022-09-01",
      [
        [2014, "2022-08-31T23:59:59", { code: "EA", name: "École d'Athlétisme" }],
        [2014, "2022-09-01T00:00:00", { code: "EA", name: "Éveil Athlétique" }],
      ],
    ],
    [
      "New 'Masters' code from 2024-09-01",
      [
        [1989, "2024-08-31T23:59:59", { code: "VE", name: "Masters" }, { code: "M0", name: "Masters 0" }],
        [1989, "2024-09-01T00:00:00", { code: "MA", name: "Masters" }, { code: "M0", name: "Masters 0" }],
      ],
    ],
  ] as const;

  for (const [name, cases] of testCases) {
    describe(name, () => {
      for (const [birthYear, date, expected, expectedDetailed] of cases) {
        it(`Birth year ${birthYear} on ${date} (simple)`, () => {
          expect(getCategory(birthYear, { date: new Date(date), detailed: false })).toEqual(expected);
        });

        it(`Birth year ${birthYear} on ${date} (detailed)`, () => {
          expect(getCategory(birthYear, { date: new Date(date) })).toEqual(expectedDetailed ?? expected);
        });
      }
    });
  }
});
