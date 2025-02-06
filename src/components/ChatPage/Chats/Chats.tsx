import { useState } from "react";
import Styles from "./chats.module.css";
import { NewNumber } from "./NewNumber";
import { setCurrentChats, useAppDispatch, useGetChats } from "../../../store";

function Chats() {
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useAppDispatch();
  const chats = useGetChats();
  const showNewNumber = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className={Styles.chats}>
      <div className={Styles.header}>
        <h2>Чаты</h2>
        <button onClick={showNewNumber}>+</button>
      </div>
      <div className={Styles.chatsList}>
        {chats.chats.map((chat) => (
          <div
            className={
              chat.chatId === chats.currentChat
                ? Styles.chat + " " + Styles.active
                : Styles.chat
            }
            key={chat.chatId}
            onClick={() => {
              dispatch(setCurrentChats(chat.chatId));
            }}
          >
            {chat.chatName ? chat.chatName : chat.chatId}
          </div>
        ))}
      </div>
      {isVisible && <NewNumber onClick={showNewNumber} />}
    </div>
  );
}

export { Chats };
