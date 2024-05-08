import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import "../../styles/sort-col.css";

interface Props {
  text: string;
}

export default function SortCol({ text }: Readonly<Props>) {
  return (
    <div className="sortCol">
      <span className="sortCol__text">{text}</span>
      <span className="sortCol__indicatorsContainer">
        <IoMdArrowDropup />
        <IoMdArrowDropdown />
      </span>
    </div>
  );
}
