import { describe, expect, it } from "vitest";
import { getCategory } from "../src";

describe("Category depending on date and birth date", () => {
  const testCases = [
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
