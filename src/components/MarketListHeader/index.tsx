import { IoSearchSharp } from "react-icons/io5";
import SearchInput from "../SearchInput";
import { setSearchQuery } from "../../store/pairsSlice";
import { useDispatch, useSelector } from "react-redux";
import { FiMoon } from "react-icons/fi";
import MarketlistSort from "../MarketListSort";
import "../../pages/MarketList/styles.css";
import {
  selectLanguage,
  selectTheme,
  setLanguage,
  setTheme,
} from "../../store/preferencesSlice";
import { MdOutlineWbSunny } from "react-icons/md";
import { useEffect, useState } from "react";
import useDebounce from "../../utils/hooks/useDebounce";
import { useTranslation } from "react-i18next";

export default function MarketListHeader() {
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounce(searchValue, 500);
  const theme = useSelector(selectTheme);
  const language = useSelector(selectLanguage);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(setSearchQuery(debouncedSearchValue));
  }, [debouncedSearchValue, dispatch]);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const toggleTheme = () => {
    dispatch(setTheme(theme === "dark" ? "light" : "dark"));
  };

  const toggleLanguage = () => {
    dispatch(setLanguage(language === "fa" ? "en" : "fa"));
  };

  return (
    <div className="marketListPage__header">
      <div className="marketingListPage__header__upperContainer">
        <div className="marketingListPage__header__searchInputContainer">
          <SearchInput
            value={searchValue}
            onChange={(value) => handleSearchChange(value)}
            placeholder={t("marketSearch")}
            rightIcon={<IoSearchSharp />}
          />
        </div>
        <button
          className="marketingListPage__header__themeToggler"
          onClick={toggleLanguage}
        >
          {language === "fa" ? "fa" : "en"}
        </button>
        <button
          className="marketingListPage__header__themeToggler"
          onClick={toggleTheme}
        >
          {theme === "light" ? <FiMoon /> : <MdOutlineWbSunny />}
        </button>
      </div>
      <MarketlistSort />
    </div>
  );
}
