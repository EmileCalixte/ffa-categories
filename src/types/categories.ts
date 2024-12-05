import type { ALL_CATEGORY_CODES } from "../constants/categories";

export type CategoryCode = (typeof ALL_CATEGORY_CODES)[number];

export type CategoryList = Partial<Record<CategoryCode, string>>;