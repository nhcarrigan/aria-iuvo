/**
 * @copyright nhcarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import { Locale } from "discord.js";

/**
 * List of locales that LibreTranslate supports. This is a mix of
 * Discord locales and mapped values.
 */
const supportedLocales: Array<string> = [
  Locale.Indonesian,
  "en",
  Locale.Bulgarian,
  "zh",
  "zt",
  Locale.Czech,
  Locale.Danish,
  Locale.Dutch,
  Locale.Finnish,
  Locale.French,
  Locale.German,
  Locale.Greek,
  Locale.Hindi,
  Locale.Hungarian,
  Locale.Italian,
  Locale.Japanese,
  Locale.Korean,
  Locale.Lithuanian,
  Locale.Polish,
  "pt",
  Locale.Romanian,
  Locale.Russian,
  "es",
  "sv",
  Locale.Thai,
  Locale.Turkish,
  Locale.Ukrainian,
];

/**
 * Maps a Discord locale string to the corresponding LibreTranslate
 * locale when they are different.
 */
const mappedLocales: Partial<Record<Locale, string>> = {
  [Locale.EnglishGB]:    "en",
  [Locale.EnglishUS]:    "en",
  [Locale.ChineseCN]:    "zh",
  [Locale.ChineseTW]:    "zt",
  [Locale.PortugueseBR]: "pt",
  [Locale.SpanishES]:    "es",
  [Locale.SpanishLATAM]: "es",
  [Locale.Swedish]:      "sv",
};

export { supportedLocales, mappedLocales };
