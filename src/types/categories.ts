import type { ALL_CATEGORY_CODES } from "../constants/categories";
export interface CategoryData {
  code: CategoryCode;
  name: string;
}

export type CategoryCode = (typeof ALL_CATEGORY_CODES)[number];

export type CategoryList = Partial<Record<CategoryCode, string>>;

export type AgeToCategory<TList extends CategoryList> = Map<number, keyof TList>;

export type CategoryListMinAge<TList extends CategoryList = CategoryList> = Record<keyof TList, number>;
