import Styles from "./messages.module.css";

function NotSelected() {
  return (
    <div className={Styles.notSelected}>
      <h2>Выберите чат</h2>
    </div>
  );
}

export { NotSelected };
