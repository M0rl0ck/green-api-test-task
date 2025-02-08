import { useEffect } from "react";
import {
  CurrentUserState,
  useAppDispatch,
  useGetCurrentUser,
  addMessage,
} from "../store";
import { NotificationType } from "../types/notificationType";
import type { Message } from "../store";

const useGetNotification = () => {
  const user = useGetCurrentUser();
  const dispatch = useAppDispatch();
  useEffect(() => {
    let isMounted = true;
    let timeOutId: ReturnType<typeof setTimeout>;

    const deleteNotification = async (
      user: CurrentUserState,
      receiptId: number
    ) => {
      const { apiUrl, idInstance, apiTokenInstance } = user;
      const url = `${apiUrl}/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${receiptId}`;
      try {
        const response = await fetch(url, {
          method: "DELETE",
        });
        if (!response.ok) {
          console.log(response.statusText);
        }
      } catch (error) {
        console.log(error);
      }
    };

    const getNotification = async (user: CurrentUserState) => {
      const { apiUrl, idInstance, apiTokenInstance } = user;
      try {
        const response = await fetch(
          `${apiUrl}/waInstance${idInstance}/receiveNotification/${apiTokenInstance}?receiveTimeout=10`
        );
        if (!response.ok) {
          console.log(response.statusText);
        }
        const data = (await response.json()) as NotificationType;
        if (isMounted) {
          let delay = 1000;
          if (data) {
            delay = 0;
            if (
              data.body.messageData.typeMessage === "textMessage" ||
              data.body.messageData.typeMessage === "extendedTextMessage"
            ) {
              const idMessage = data.body.idMessage;
              const isIncoming =
                data.body.typeWebhook === "incomingMessageReceived";
              const { chatId, chatName, sender, senderName } =
                data.body.senderData;
              const timestamp = data.body.timestamp;
              const textMessage =
                data.body.messageData.typeMessage === "textMessage"
                  ? data.body.messageData.textMessageData.textMessage
                  : data.body.messageData.extendedTextMessageData.text;
              const message: Message = {
                idMessage,
                isIncoming,
                chatId,
                chatName,
                sender,
                senderName,
                timestamp,
                textMessage,
              };
              dispatch(addMessage(message));
            }
            await deleteNotification(user, data.receiptId);
          }
          timeOutId = setTimeout(() => getNotification(user), delay);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getNotification(user);
    return () => {
      isMounted = false;
      clearTimeout(timeOutId);
    };
  }, [dispatch, user]);
};

export { useGetNotification };
