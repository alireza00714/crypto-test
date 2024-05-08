import { Currency } from "../../api/types";
import "../../styles/market-list-item.css";

interface Props {
  market: Currency;
}

export default function MarketListItem(props: Readonly<Props>) {
  const {
    market: { logo },
  } = props;

  return (
    <div className="marketListItem">
      <div className="marketListItem__infoContainer">
        <img src={logo} alt="s" className="marketListItem__image" />
        <span className="marketListItem__name">بیت کوین (BTC)</span>
      </div>
      <div className="marketListItem__priceContainer">
        <span className="marketListItem__currency">IRR</span>
        <span className="marketListItem__price">1,332,129,129</span>
      </div>
    </div>
  );
}
