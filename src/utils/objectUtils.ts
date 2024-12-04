/**
 * Returns a shallow copy of an object without the specified keys
 * @param object The object to copy
 * @param keys The keys to exclude
 */
export function excludeKeys<TObject extends object, TKey extends keyof TObject>(
  object: TObject,
  keys: TKey[],
): Omit<TObject, TKey> {
  const result = { ...object };

  for (const key of keys) {
    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete -- `delete` is used here intentionally on a cloned object.
    delete result[key];
  }

  return result;
}

/**
 * Wrapper of Object.keys which infers keys type
 */
export function objectKeys<TObject extends object>(object: TObject): Array<keyof TObject> {
  return Object.keys(object) as Array<keyof TObject>;
}
