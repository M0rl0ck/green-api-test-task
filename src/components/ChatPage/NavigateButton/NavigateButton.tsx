import Styles from "./navigateButton.module.css";

interface NavigateButtonProps {
  type?: "add" | "back";
  onClick: () => void;
  children: React.ReactNode;
}

function NavigateButton({ onClick, type, children }: NavigateButtonProps) {
  const style =
    type === "add" ? Styles.button + " " + Styles[type] : Styles.button;
  return (
    <button className={style} onClick={onClick}>
      {children}
    </button>
  );
}

export { NavigateButton };
