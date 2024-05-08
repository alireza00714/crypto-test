import { useState } from "react";
import SearchInput from "../../components/SearchInput";
import "./styles.css";
import { IoSearchSharp } from "react-icons/io5";
import SortCol from "../../components/SortCol";
import { useCurrencies } from "../../api";
import Loader from "../../components/Loader";
import MarketListItem from "../../components/MarketListItem";

export default function MarketList() {
  const [searchValue, setSearchValue] = useState("");

  const { data, isLoading } = useCurrencies();

  return (
    <div className="marketListPage">
      <div className="marketListPage__header">
        <SearchInput
          value={searchValue}
          onChange={(value) => setSearchValue(value)}
          placeholder="جستجوی بازار"
          rightIcon={<IoSearchSharp />}
        />
        <div className="marketListPage__header__sortContainer">
          <SortCol text="نام" />
          <SortCol text="آخرین قیمت" />
        </div>
      </div>
      <div className="marketListPage__marketList">
        <Loader
          data={data?.data}
          isLoading={isLoading}
          loadingComponent={"loading"}
          render={(data) =>
            data.map((item) => <MarketListItem key={item.id} market={item} />)
          }
        />
      </div>
    </div>
  );
}
