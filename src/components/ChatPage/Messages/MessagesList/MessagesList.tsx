import { useGetChats } from "../../../../store";
import { MessagesBody } from "./MessagesBody";
import { MessagesFooter } from "./MessagesFooter";
import MessagesHeader from "./MessagesHeader";
import Styles from "./messagesList.module.css";

function MessagesList() {
  const chats = useGetChats();
  const chat = chats.chats.find((chat) => chat.chatId === chats.currentChat);
  const chatName = chat ? chat.chatName : chats.currentChat;
  return (
    <div className={Styles.container}>
      <MessagesHeader name={chatName} />
      <MessagesBody />
      <MessagesFooter chatId={chats.currentChat} />
    </div>
  );
}

export { MessagesList };
