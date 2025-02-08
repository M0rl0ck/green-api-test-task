import { useGetCurrentChats } from "../../../store";
import { MessagesList } from "./MessagesList";
import { NotSelected } from "./NotSelected";

function Messages() {
  const chats = useGetCurrentChats();
  return <>{chats.length > 0 ? <MessagesList /> : <NotSelected />}</>;
}

export { Messages };
