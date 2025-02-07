import { useGetNotification } from "../../API";
import Styles from "./chatPage.module.css";
import { Chats } from "./Chats";
import { Messages } from "./Messages";

function ChatPage() {
  useGetNotification();
  return (
    <section className={Styles.container}>
      <Chats />
      <Messages />
    </section>
  );
}

export { ChatPage };
