import { useState } from "react";
import type { CurrentUserState } from "../store";
import { FORBIDDEN } from "../errors/errors";

type CheckAuthorization = {
  stateInstance: "notAuthorized" | "authorized";
};

const useCheckAuthorization = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<CurrentUserState | null>(null);

  const checkAuthorization = async (user: CurrentUserState) => {
    const { apiUrl, idInstance, apiTokenInstance } = user;
    const url = `${apiUrl}/waInstance${idInstance}/getStateInstance/${apiTokenInstance}
`;
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.log(response.statusText);
        setError(new Error(response.statusText));
        return;
      }
      const data = (await response.json()) as CheckAuthorization;
      if (data.stateInstance === "authorized") {
        setData({ ...user, isAuthorized: true });
        return;
      }
      setError(new Error("Not authorized"));
    } catch (error) {
      if (error instanceof Error) {
        setError(new FORBIDDEN());
      }
    } finally {
      setIsLoading(false);
    }
  };

  return [checkAuthorization, { data, isLoading, error }] as const;
};

export { useCheckAuthorization };
