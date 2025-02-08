import { setCurrentChats, useAppDispatch } from "../../../../store";
import { NavigateButton } from "../../NavigateButton";
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
      <NavigateButton onClick={closeChat}>🡠</NavigateButton>
      <p>{name}</p>
    </div>
  );
}

export default MessagesHeader;
