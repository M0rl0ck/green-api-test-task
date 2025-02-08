import { useGetChats } from "../../../../store";
import { MessageCard } from "./MessageCard";
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
        <MessageCard key={message.idMessage} message={message} />
      ))}
    </div>
  );
}

export { MessagesBody };
