import { Route, Routes } from "react-router-dom";
import MarketList from "./pages/MarketList/MarketList";
import MarketDetail from "./pages/MarketDetail/MarketDetail";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectLanguage, selectTheme } from "./store/preferencesSlice";
import getDirByLang from "./utils/functions/getDirByLang";
import { useTranslation } from "react-i18next";

export default function App() {
  const theme = useSelector(selectTheme);
  const language = useSelector(selectLanguage);
  const {
    i18n: { changeLanguage },
  } = useTranslation();

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  useEffect(() => {
    const direction = getDirByLang(language);
    changeLanguage(language);
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
    document.documentElement.style.direction = direction;
  }, [language, changeLanguage]);

  return (
    <Routes>
      <Route path="/">
        <Route index element={<MarketList />} />
        <Route path="/detail/:marketName" element={<MarketDetail />} />
        <Route path="*" element={<div>no such file or directory</div>} />
      </Route>
    </Routes>
  );
}
