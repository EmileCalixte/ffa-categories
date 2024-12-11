import type { ALL_CATEGORY_CODES, ALL_CATEGORY_NAMES } from "../constants/categories";
export interface CategoryData {
  code: CategoryCode;
  name: CategoryName;
}

/**
 * Any existing category code
 */
export type CategoryCode = (typeof ALL_CATEGORY_CODES)[number];

/**
 * Any existing category name
 */
export type CategoryName = (typeof ALL_CATEGORY_NAMES)[number];

/**
 * A record with category code as key and category name as value
 */
export type CategoryList = Partial<Record<CategoryCode, CategoryName>>;

export type AgeToCategory<TList extends CategoryList> = Map<number, keyof TList>;

export type CategoryListMinAge<TList extends CategoryList = CategoryList> = Record<keyof TList, number>;
