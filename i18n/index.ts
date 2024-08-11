import { ja } from "./ja";
import { en } from "./en";
import { Translations } from "./types";

const translations: Translations = {
  ja,
  en,
};

import { getLocales } from "expo-localization";
import { I18n, TranslateOptions } from "i18n-js";
import { TranslationKeys } from "./types";

export const i18n = new I18n();
export const deviceLanguage: string | null = getLocales()[0].languageCode;

const fallbackLanguage: string = "ja";

i18n.locale = deviceLanguage ?? fallbackLanguage;
i18n.translations = translations;

export function t(key: TranslationKeys, options?: TranslateOptions): string {
  if (!key) return "";

  return i18n.translate(key, options);
}
