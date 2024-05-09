import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import faJson from "./locale/fa.json";
import enJson from "./locale/en.json";

i18n.use(initReactI18next).init({
  resources: {
    fa: { ...faJson },
    en: { ...enJson },
  },
  lng: "fa",
});
