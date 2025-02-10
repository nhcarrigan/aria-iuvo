/**
 * @copyright nhcarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import { describe, it, expect } from "vitest";
import { supportedLocales } from "../src/config/locales.js";
import { responses } from "../src/i18n/responses.js";

describe("i18n responses", () => {
  it.each(Object.keys(responses))(
    "should have interpolated values for translation key in lang %s",
    (lang) => {
      expect.assertions(3);
      expect(
        responses[lang]?.translation,
        "does not have translation variable",
      ).toMatch(/{{translation}}/);
      expect(
        responses[lang]?.translation,
        "does not have language variable",
      ).toMatch(/{{language}}/);
      expect(
        responses[lang]?.translation,
        "does not have confidence variable",
      ).toMatch(/{{confidence}}/);
    },
  );

  it.each(Object.keys(responses))(
    "should have interpolated values for unsupported-locale key in lang %s",
    (lang) => {
      expect.assertions(1);
      expect(
        responses[lang]?.["unsupported-locale"],
        "does not have target variable",
      ).toMatch(/{{target}}/);
    },
  );

  it.each(Object.keys(responses))(
    "%s should be supported by our software", (lang) => {
      expect.assertions(1);
      expect(supportedLocales, `${lang} is not supported by our app`).toContain(lang);
    },
  );
});
