import { ReactNode } from "react";
import "../../styles/search-input.css";

interface Props {
  value: string;
  onChange: (value: string) => void;
  rightIcon: ReactNode;
  placeholder: string;
}

export default function SearchInput({
  value,
  onChange,
  rightIcon,
  placeholder,
}: Readonly<Partial<Props>>) {
  return (
    <div className="searchInput">
      {rightIcon && <span className="searchInput__icon">{rightIcon}</span>}
      <input
        className="searchInput__input"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
}
