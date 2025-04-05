import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButtons() {
  return (
    <div className="button-container">
      <button className="count-btn">
        <MinusIcon className="count-btn-icon" />
      </button>
      <button className="count-btn count-btn--plus">
        <PlusIcon className="count-btn-icon" />
      </button>
    </div>
  );
}
