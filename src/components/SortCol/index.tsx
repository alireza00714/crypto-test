import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import "../../styles/sort-col.css";
import { SortConfig, directionKeys, fieldKeys } from "../../store/pairsSlice";
import { useEffect, useState } from "react";

interface Props {
  text: string;
  sortKey: fieldKeys;
  currentSort?: SortConfig;
  onClick: (field: fieldKeys, direction: directionKeys) => void;
}

export default function SortCol({
  text,
  sortKey,
  onClick,
  currentSort,
}: Readonly<Props>) {
  const [direction, setDirection] = useState<directionKeys>("");

  useEffect(() => {
    if (!currentSort) return;

    if (currentSort.field !== sortKey) {
      setDirection("");
    }
  }, [currentSort]);

  const handleClickSort = (sortKey: fieldKeys, newDirection: directionKeys) => {
    const finalDirection = direction !== newDirection ? newDirection : "";
    setDirection(finalDirection);
    onClick(sortKey, finalDirection);
  };

  return (
    <div className="sortCol">
      <span className="sortCol__text">{text}</span>
      <span className="sortCol__indicatorsContainer">
        <IoMdArrowDropup
          style={{
            color:
              direction === "desc" ? "var(--text-color)" : "var(--gray-300)",
          }}
          onClick={() => handleClickSort(sortKey, "desc")}
        />
        <IoMdArrowDropdown
          style={{
            color:
              direction === "asc" ? "var(--text-color)" : "var(--gray-300)",
          }}
          onClick={() => handleClickSort(sortKey, "asc")}
        />
      </span>
    </div>
  );
}
