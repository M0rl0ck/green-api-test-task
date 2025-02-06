import { useEffect, useState } from "react";
import Styles from "./loginPage.module.css";
import { useCheckAuthorization } from "../../API";
import { setCurrentUser, useAppDispatch, useGetCurrentUser } from "../../store";

function LoginPage() {
  interface FormState {
    idInstance: string;
    apiTokenInstance: string;
  }
  const [formState, setFormState] = useState<FormState>({
    idInstance: "",
    apiTokenInstance: "",
  });

  const dispatch = useAppDispatch();
  const [checkAuthorization, { data, isLoading, error }] =
    useCheckAuthorization();
  const user = useGetCurrentUser();
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (data?.isAuthorized) {
      dispatch(setCurrentUser(data));
    }
  }, [data, dispatch]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userState = {
      ...user,
      ...formState,
    };
    checkAuthorization(userState);
  };
  return (
    <div className={Styles.container}>
      <form action="" onSubmit={handleSubmit}>
        <input
          name="idInstance"
          type="text"
          placeholder="idInstance"
          value={formState.idInstance}
          onChange={handleInput}
        />
        <input
          name="apiTokenInstance"
          type="text"
          placeholder="apiTokenInstance"
          value={formState.apiTokenInstance}
          onChange={handleInput}
        />
        <button
          type="submit"
          disabled={!formState.idInstance || !formState.apiTokenInstance}
        >
          Log in
        </button>
      </form>
      <p>
        {!!error && error.message}
        {isLoading && "Loading..."}
      </p>
    </div>
  );
}

export { LoginPage };
