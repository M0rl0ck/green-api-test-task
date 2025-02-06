import "./App.css";
import { useGetCurrentUser } from "./store";
import { ChatPage, LoginPage } from "./components";
function App() {
  const currentUser = useGetCurrentUser();
  return <>{currentUser.isAuthorized ? <ChatPage /> : <LoginPage />}</>;
}

export default App;
