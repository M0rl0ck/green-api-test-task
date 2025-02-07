import { CurrentUserState } from "../store";

const sendMessage = async (
  user: CurrentUserState,
  chatId: string,
  message: string
) => {
  const { apiUrl, idInstance, apiTokenInstance } = user;
  const url = `${apiUrl}/waInstance${idInstance}/sendMessage/${apiTokenInstance}`;
  const body = {
    chatId,
    message,
  };
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      console.log(response.statusText);
    }
  } catch (error) {
    console.log(error);
  }
};

export { sendMessage };
