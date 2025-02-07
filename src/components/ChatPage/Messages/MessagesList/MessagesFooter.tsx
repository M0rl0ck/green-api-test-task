import { useState } from "react";
import Styles from "./messagesList.module.css";
import { sendMessage } from "../../../../API";
import { useGetCurrentUser } from "../../../../store";

interface MessagesFooterProps {
  chatId: string;
}

function MessagesFooter({ chatId }: MessagesFooterProps) {
  const [text, setText] = useState("");

  const user = useGetCurrentUser();
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setText(value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendMessage(user, chatId, text);
    setText("");
  };
  return (
    <div className={Styles.messagesFooter}>
      <form action="" onSubmit={handleSubmit} className={Styles.messagesForm}>
        <textarea
          onChange={handleInput}
          value={text}
          placeholder="Введите сообщение"
        />
        <button>Отправить</button>
      </form>
    </div>
  );
}

export { MessagesFooter };
