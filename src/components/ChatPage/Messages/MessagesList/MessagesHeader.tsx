import { setCurrentChats, useAppDispatch } from "../../../../store";
import Styles from "./messagesList.module.css";

interface MessagesHeaderProps {
  name: string;
}
function MessagesHeader({ name }: MessagesHeaderProps) {
  const dispatch = useAppDispatch();
  const closeChat = () => {
    dispatch(setCurrentChats(""));
  };
  return (
    <div className={Styles.messagesHeader}>
      <p>{name}</p>
      <button onClick={closeChat}>←</button>
    </div>
  );
}

export default MessagesHeader;
