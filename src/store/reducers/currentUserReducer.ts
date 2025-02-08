import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppSelector } from "../hooks";

interface CurrentUserState {
  apiUrl: string;
  idInstance: string;
  apiTokenInstance: string;
  isAuthorized: boolean;
}

const initialState: CurrentUserState = {
  apiUrl: "https://api.green-api.com",
  idInstance: "",
  apiTokenInstance: "",
  isAuthorized: false,
};

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<CurrentUserState>) => {
      state = action.payload;
      return state;
    },
    setUnAuthorized: () => initialState,
  },
});

const currentUserReducer = currentUserSlice.reducer;
const { setCurrentUser, setUnAuthorized } = currentUserSlice.actions;
const useGetCurrentUser = () => {
  const currentUser = useAppSelector((state) => state.currentUser);
  return currentUser;
};

export {
  currentUserReducer,
  setCurrentUser,
  setUnAuthorized,
  useGetCurrentUser,
};

export type { CurrentUserState };
