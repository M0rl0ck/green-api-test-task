import { useState } from "react";
import { useAppDispatch } from "../../../../store";
import Styles from "./messagesList.module.css";
import { addMessage } from "../../../../store/reducers/chatsReducer";

interface MessagesFooterProps {
  chatId: string;
}

function MessagesFooter({ chatId }: MessagesFooterProps) {
  const [text, setText] = useState("");
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setText(value);
  };
  const dispatch = useAppDispatch();
  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = {
      textMessage: text,
      chatId: chatId,
      sender: chatId,
      idMessage: Date.now().toString(),
    };
    dispatch(addMessage(message));
    setText("");
  };
  return (
    <div className={Styles.messagesFooter}>
      <form action="" onSubmit={sendMessage} className={Styles.messagesForm}>
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
