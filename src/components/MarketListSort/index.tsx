import { useDispatch, useSelector } from "react-redux";
import SortCol from "../SortCol";
import {
  directionKeys,
  fieldKeys,
  selectSortConfig,
  setSortConfig,
} from "../../store/pairsSlice";
import { useTranslation } from "react-i18next";

export default function MarketlistSort() {
  const dispatch = useDispatch();
  const sortConfig = useSelector(selectSortConfig);
  const { t } = useTranslation();

  const handleSort = (field: fieldKeys, direction: directionKeys) => {
    dispatch(setSortConfig({ field, direction }));
  };

  return (
    <div className="marketListPage__header__sortContainer">
      <SortCol
        text={t("name")}
        sortKey="base_currency_symbol.en"
        currentSort={sortConfig}
        onClick={handleSort}
      />
      <SortCol
        text={t("lastPrice")}
        sortKey="buy"
        currentSort={sortConfig}
        onClick={handleSort}
      />
    </div>
  );
}
