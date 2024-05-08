import LabelText from "../../components/LabelText";
import "./styles.css";

export default function MarketDetail() {
  return (
    <div className="marketDetailPage">
      <div className="marketDetailPage_header">
        <div className="marketDetailPage__header__imageContainer">
          <img src="." className="marketDetailPage__header__image" />
        </div>
        <span>بیت کوین (BTC)</span>
      </div>
      <div className="marketDetailPage__detail">
        <LabelText label="نام انگلیسی" text="bitcoin" />
        <LabelText label="قیمت" text="41,625,000,000 IRR" />
        <LabelText label="تغییرات 24 ساعته" text="-0.91%" />
        <LabelText label="حجم معاملاتی" text="43,789,474,537 IRR" />
      </div>
    </div>
  );
}
