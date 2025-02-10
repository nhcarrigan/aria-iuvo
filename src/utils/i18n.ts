/**
 * @copyright nhcarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import { responses } from "../i18n/responses.js";

/**
 * Translates a key to the specified locale, performing
 * interpolation on the string.
 * @param key -- The key to translate.
 * @param locale -- The user's locale.
 * @param interpolation -- An object of keys to replace with values.
 * @returns The translated string.
 */
export const i18n = (
  key: keyof (typeof responses)["en"],
  locale: string,
  interpolation: Record<string, unknown> = {},
): string => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- We know the en key exists, but having the loose type helps.
  const string = responses[locale]?.[key] ?? responses.en![key];
  // eslint-disable-next-line unicorn/no-array-reduce -- This is the cleanest way to do it, really.
  return Object.entries(interpolation).reduce((accumulator, [ k, v ]) => {
    return accumulator.replace(`{{${k}}}`, String(v));
  }, string);
};
