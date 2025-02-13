type InstanceData = {
  idInstance: number;
  wid: string;
  typeInstance: "whatsapp";
};

type SenderData = {
  chatId: string;
  chatName: string;
  sender: string;
  senderName: string;
  senderContactName: string;
};

type TextMessageData = {
  typeMessage: "textMessage";
  textMessageData: {
    textMessage: string;
  };
};
type ExtendedTextMessageData = {
  typeMessage: "extendedTextMessage";
  extendedTextMessageData: {
    text: string;
  };
};

type NotificationMessage = {
  typeWebhook:
    | "incomingMessageReceived"
    | "outgoingMessageReceived"
    | "outgoingAPIMessageReceived";
  instanceData: InstanceData;
  timestamp: number;
  idMessage: string;
  senderData: SenderData;
  messageData: TextMessageData | ExtendedTextMessageData;
};

type NotificationType = {
  receiptId: number;
  body: NotificationMessage;
};

export type { NotificationType };
