/**
 * Generates a greeting message.
 *
 * @param name - The name of the person to greet. Defaults to `"world"` if not provided.
 * @returns A greeting message in the format `"Hello <name>!"`.
 *
 * @example
 * ```typescript
 * helloWorld(); // Returns: "Hello world!"
 * helloWorld("Alice"); // Returns: "Hello Alice!"
 * ```
 */
export function helloWorld(name = "world"): string {
  return `Hello ${name}!`;
}
