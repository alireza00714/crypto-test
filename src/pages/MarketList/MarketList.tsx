import { useEffect } from "react";
import "./styles.css";
import { usePairs } from "../../api";
import Loader from "../../components/Loader";
import MarketListItem from "../../components/MarketListItem";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredSortedPairs, setPairs } from "../../store/pairsSlice";
import { useNavigate } from "react-router-dom";
import MarketListHeader from "../../components/MarketListHeader";

export default function MarketList() {
  const navigate = useNavigate();
  const { data, isLoading, error } = usePairs();
  const dispatch = useDispatch();
  const pairs = useSelector(selectFilteredSortedPairs);

  useEffect(() => {
    if (data) dispatch(setPairs(data.data));
  }, [data, dispatch]);

  const handleClickMarketListItem = (name: string) => {
    navigate(`/detail/${name}`);
  };

  return (
    <div className="marketListPage">
      <MarketListHeader />
      <div className="marketListPage__marketList">
        <Loader
          data={pairs}
          isLoading={isLoading}
          error={error?.message}
          loadingComponent={"در حال بارگذاری..."}
          render={(data) =>
            data.map((item) => (
              <MarketListItem
                key={`${item.url_name}-${item.web_link}`}
                market={item}
                onClick={(name) => handleClickMarketListItem(name)}
              />
            ))
          }
        />
      </div>
    </div>
  );
}
