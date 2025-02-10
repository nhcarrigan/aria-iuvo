/**
 * @copyright nhcarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import { describe, it, expect } from "vitest";
import { supportedLocales, mappedLocales } from "../src/config/locales.js";

const localesSupportedByLibretranslate = [ "ar", "az", "bg", "bn", "ca", "cs", "da", "de", "el", "en", "eo", "es", "et", "eu", "fa", "fi", "fr", "ga", "gl", "he", "hi", "hu", "id", "it", "ja", "ko", "lt", "lv", "ms", "nb", "nl", "pl", "pt", "ro", "ru", "sk", "sl", "sq", "sv", "th", "tl", "tr", "uk", "ur", "zh", "zt" ];

describe("i18n locales", () => {
  it.each(supportedLocales)("%s should be supported by libretranslate", (lang) => {
    expect.assertions(1);
    expect(localesSupportedByLibretranslate, `${lang} is not supported by libretranslate`).toContain(lang);
  });

  it.each(Object.values(mappedLocales))("%s should be mapped to a supported locale", (lang) => {
    expect.assertions(1);
    expect(supportedLocales, `${lang} is not supported by our app`).toContain(lang);
  });
});
