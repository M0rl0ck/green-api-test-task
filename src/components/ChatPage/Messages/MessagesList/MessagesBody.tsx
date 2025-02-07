import { useGetChats } from "../../../../store";
import Styles from "./messagesList.module.css";

function MessagesBody() {
  const chats = useGetChats();
  const chat = chats.chats.find(
    (chat) => chat.chatId === chats.currentChat
  ) || {
    messages: [],
  };
  return (
    <div className={Styles.messagesList}>
      {chat.messages.map((message) => (
        <div className={Styles.message} key={message.idMessage}>
          <p>{message.textMessage}</p>
        </div>
      ))}
    </div>
  );
}

export { MessagesBody };
