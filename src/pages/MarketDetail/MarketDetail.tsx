import { useNavigate, useParams } from "react-router-dom";
import LabelText from "../../components/LabelText";
import "./styles.css";
import Loader from "../../components/Loader";
import { usePairs } from "../../api";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPairsState, setPairs } from "../../store/pairsSlice";
import { Pair } from "../../api/types";
import { useTranslation } from "react-i18next";
import { selectLanguage } from "../../store/preferencesSlice";

export default function MarketDetail() {
  const [targetMarket, setTargetMarket] = useState<Pair>();
  const { marketName } = useParams();
  const { data, isLoading, error: apiError } = usePairs();
  const { pairs } = useSelector(selectPairsState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const language = useSelector(selectLanguage);
  const { t } = useTranslation();

  useEffect(() => {
    if (data) dispatch(setPairs(data.data));
  }, [data, dispatch]);

  useEffect(() => {
    if (!marketName) {
      navigate("/");
      return;
    }

    const splittedMarketName = marketName.split("-");
    const baseCurrencyName = splittedMarketName[0];
    const quoteCurrencyName = splittedMarketName[1];
    const targetMarket = pairs.find(
      (pair) =>
        pair.base_currency_symbol.en === baseCurrencyName &&
        pair.quote_currency_symbol.en === quoteCurrencyName
    );
    if (targetMarket) {
      setTargetMarket(targetMarket);
    }
  }, [marketName, pairs, navigate]);

  return (
    <>
      <Loader
        data={targetMarket}
        isLoading={isLoading}
        error={apiError?.message}
        loadingComponent={"در حال بارگذاری..."}
        render={(data) => (
          <div className="marketDetailPage">
            <div className="marketDetailPage__header">
              <img
                src={data.logo}
                className="marketDetailPage__header__image"
              />
              {language === "fa" ? (
                <span>
                  {data.base_currency_symbol.fa} (
                  {data.base_currency_symbol.en.toLocaleUpperCase()})
                </span>
              ) : (
                <span>{data.base_currency_symbol.en.toLocaleUpperCase()}</span>
              )}
            </div>
            <div className="marketDetailPage__detail">
              <LabelText
                label={t("englishName")}
                text={data.name.en.split("/")[0]}
              />
              <LabelText
                label={t("price")}
                text={`${data.buy.toLocaleString()} ${data.quote_currency_symbol.en.toLocaleUpperCase()}`}
              />
              <LabelText
                label={t("last24hChange")}
                text={`${data.financial.last24h.change_percent} %`}
              />
              <LabelText
                label={t("tradeVolume")}
                text={`${data.financial.last24h.quote_volume.toLocaleString()} ${data.quote_currency_symbol.en.toLocaleUpperCase()}`}
              />
            </div>
          </div>
        )}
      />
      <button
        className="marketDetailPage_backButton"
        onClick={() => navigate("/")}
      >
        {t("back")}
      </button>
    </>
  );
}
