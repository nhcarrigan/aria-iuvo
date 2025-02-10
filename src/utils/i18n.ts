/**
 * @copyright nhcarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */
/* eslint-disable @typescript-eslint/no-non-null-assertion -- We've already asserted the language exists through our typeguard.*/
/* eslint-disable unicorn/no-array-reduce -- It's a clean approach here and makes sense. */
/* eslint-disable @typescript-eslint/consistent-type-assertions  -- We have likely over-engineered the hell out of this...*/

import { responses } from "../i18n/responses.js";

const isTranslatedLocale = (
  locale: string,
): locale is keyof typeof responses => {
  return locale in responses;
};

/**
 * Translates a key to the specified locale, performing
 * interpolation on the string.
 * @param key -- The key to translate.
 * @param rawLocale -- The user's locale.
 * @param interpolation -- An object of keys to replace with values.
 * @returns The translated string.
 */
export const i18n = (
  key:
    | keyof (typeof responses)["en"]
    | `embed.${keyof (typeof responses)["en"]["embed"]}`
    | `button.${keyof (typeof responses)["en"]["button"]}`,
  rawLocale: string,
  interpolation: Record<string, unknown> = {},
): string => {
  const locale: keyof typeof responses = isTranslatedLocale(rawLocale)
    ? rawLocale
    : "en";
  const isNestedProperty = key.startsWith("embed.")
  || key.startsWith("button.");
  if (isNestedProperty) {
    const [ category, property ] = key.split(".") as
      | ["embed", keyof (typeof responses)["en"]["embed"]]
      | ["button", keyof (typeof responses)["en"]["button"]];
    if (category === "embed") {
      const string = responses[locale]![category][property];
      return Object.entries(interpolation).reduce((accumulator, [ k, v ]) => {
        return accumulator.replace(`{{${k}}}`, String(v));
      }, string);
    }
    const string = responses[locale]![category][property];
    return Object.entries(interpolation).reduce((accumulator, [ k, v ]) => {
      return accumulator.replace(`{{${k}}}`, String(v));
    }, string);
  }
  const string
    = responses[locale]![
      key as Exclude<keyof (typeof responses)["en"], "embed" | "button">
    ];
  return Object.entries(interpolation).reduce((accumulator, [ k, v ]) => {
    return accumulator.replace(`{{${k}}}`, String(v));
  }, string);
};
