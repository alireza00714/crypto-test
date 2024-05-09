import { useSelector } from "react-redux";
import { Pair } from "../../api/types";
import "../../styles/market-list-item.css";
import { selectLanguage } from "../../store/preferencesSlice";

interface Props {
  market: Pair;
  onClick: (name: string) => void;
}

export default function MarketListItem(props: Readonly<Props>) {
  const {
    market: {
      logo,
      base_currency_symbol: { en: enBaseCurrencyName, fa: faBaseCurrencyName },
      quote_currency_symbol: { en: enQuoteCurrencyName },
      buy,
    },
    onClick,
  } = props;

  const language = useSelector(selectLanguage);

  const handleItemClick = (name: string) => {
    onClick(name);
  };

  return (
    <div
      className="marketListItem"
      onClick={() =>
        handleItemClick(`${enBaseCurrencyName}-${enQuoteCurrencyName}`)
      }
    >
      <div className="marketListItem__infoContainer">
        <img
          src={logo}
          loading="lazy"
          alt="s"
          className="marketListItem__image"
        />
        {language === "fa" ? (
          <span className="marketListItem__name">
            {faBaseCurrencyName} ({enBaseCurrencyName})
          </span>
        ) : (
          <span className="marketListItem__name">
            {enBaseCurrencyName.toUpperCase()}
          </span>
        )}
      </div>
      <div className="marketListItem__priceContainer">
        <span className="marketListItem__currency">
          {enQuoteCurrencyName.toUpperCase()}
        </span>
        <span className="marketListItem__price">{buy.toLocaleString()}</span>
      </div>
    </div>
  );
}
