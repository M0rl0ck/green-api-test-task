import Styles from "./chatPage.module.css";
import { Chats } from "./Chats";

function ChatPage() {
  return (
    <section className={Styles.container}>
      <Chats />
      <div>messages</div>
    </section>
  );
}

export { ChatPage };
