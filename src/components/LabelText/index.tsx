import "../../styles/label-text.css";

interface Props {
  label: string;
  text: string;
}

export default function LabelText({ label, text }: Readonly<Props>) {
  return (
    <div className="labelText">
      <span className="labelText__label">{label}</span>
      <span className="labelText__text">{text}</span>
    </div>
  );
}
