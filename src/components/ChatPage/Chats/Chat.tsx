import Styles from "./chats.module.css";
import {
  setCurrentChats,
  useAppDispatch,
  useGetCurrentChats,
  type Chat,
} from "../../../store";

interface ChatProps {
  chat: Chat;
}

function Chat({ chat }: ChatProps) {
  const dispatch = useAppDispatch();
  const currentChat = useGetCurrentChats();
  const styleChat =
    chat.chatId === currentChat
      ? Styles.chatContainer + " " + Styles.active
      : Styles.chatContainer;
  return (
    <div className={styleChat}>
      <div
        className={Styles.chat}
        key={chat.chatId}
        onClick={() => {
          dispatch(setCurrentChats(chat.chatId));
        }}
      >
        {chat.chatName.trim() ? chat.chatName : chat.chatId}
      </div>
    </div>
  );
}

export default Chat;
