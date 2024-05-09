import { Language } from "../../store/preferencesSlice";

type LanguageDirection = "ltr" | "rtl";

const langDirections: Record<Language, LanguageDirection> = {
  en: "ltr",
  fa: "rtl",
};

export default function getDirByLang(lang: Language) {
  return langDirections[lang];
}
