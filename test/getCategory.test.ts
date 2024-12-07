import { describe, expect, it } from "vitest";
import { getCategory } from "../src";

describe("Category depending on date and birth date", () => {
  const testCases = [
    [
      "Category evolution for somebody born in 2015",
      [
        [2015, "2015-01-01T00:00:00", { code: "EA", name: "École d'Athlétisme" }],
        [2015, "2015-10-31T23:59:59", { code: "EA", name: "École d'Athlétisme" }],
        [2015, "2015-11-01T00:00:00", { code: "BB", name: "Baby Athlé" }], // This category did not exist before this date
        [2015, "2021-10-31T23:59:59", { code: "BB", name: "Baby Athlé" }],
        [2015, "2021-11-01T00:00:00", { code: "EA", name: "École d'Athlétisme" }],
        [2015, "2022-08-31T23:59:59", { code: "EA", name: "École d'Athlétisme" }],
        [2015, "2022-09-01T00:00:00", { code: "EA", name: "Éveil Athlétique" }],
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
