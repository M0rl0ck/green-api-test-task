import Styles from "./messageCard.module.css";
import { Message } from "../../../../../store";

interface MessageCardProps {
  message: Message;
}
function MessageCard({ message }: MessageCardProps) {
  let cardStyle = Styles.messageCard + " ";
  cardStyle += message.isIncoming ? Styles.incoming : Styles.outgoing;
  return (
    <div className={cardStyle}>
      <p>{message.textMessage}</p>
    </div>
  );
}

export { MessageCard };
