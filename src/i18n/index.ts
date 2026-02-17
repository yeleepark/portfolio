import type { Locale } from "./config";
import type { Dictionary } from "./types";
import { ko } from "./ko";
import { en } from "./en";

const dictionaries: Record<Locale, Dictionary> = {
  ko,
  en,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] || dictionaries.ko;
}

export * from "./config";
export * from "./types";
