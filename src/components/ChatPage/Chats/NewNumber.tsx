import { useState } from "react";
import Styles from "./chats.module.css";
import { useAppDispatch, setCurrentChats } from "../../../store";

interface INewNumberProps {
  onClick: () => void;
}
function NewNumber({ onClick }: INewNumberProps) {
  const [number, setNumber] = useState("7");

  const dispatch = useAppDispatch();
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value.length > 11) {
      return;
    }
    const parsedValue = value.replace(/[^0-9]/g, "");
    setNumber(parsedValue);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (number.length < 11) {
      return;
    }
    const chatName = number + "@c.us";
    dispatch(setCurrentChats(chatName));
    onClick();
  };

  return (
    <div className={Styles.newNumber}>
      <div className={Styles.header}>
        <div className={Styles.title}>
          <button onClick={onClick}>←</button> <h2>Новый чат</h2>
        </div>
      </div>
      <form action="" onSubmit={handleSubmit}>
        <p>Введите номер телефона</p>
        <input
          type="text"
          placeholder="Введите номер"
          value={number}
          onChange={handleInput}
        />
        <button type="submit" disabled={number.length < 11}>
          Создать
        </button>
      </form>
    </div>
  );
}

export { NewNumber };
