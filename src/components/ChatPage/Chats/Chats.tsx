import { useState } from "react";
import Styles from "./chats.module.css";
import { NewNumber } from "./NewNumber";
import { useGetChats } from "../../../store";
import { NavigateButton } from "../NavigateButton";
import Chat from "./Chat";

function Chats() {
  const [isVisible, setIsVisible] = useState(false);
  const chats = useGetChats();
  const showNewNumber = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className={Styles.chats}>
      <div className={Styles.header}>
        <h2>Чаты</h2>
        <NavigateButton onClick={showNewNumber} type="add">
          +
        </NavigateButton>
      </div>
      <div className={Styles.chatsList}>
        {chats.chats.map((chat) => (
          <Chat key={chat.chatId} chat={chat} />
        ))}
      </div>
      {isVisible && <NewNumber onClick={showNewNumber} />}
    </div>
  );
}

export { Chats };
