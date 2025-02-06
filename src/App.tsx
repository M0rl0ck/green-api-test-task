import Styles from "./App.module.css";
import { useGetCurrentUser } from "./store";
import { ChatPage, LoginPage } from "./components";
function App() {
  const currentUser = useGetCurrentUser();
  return (
    <div className={Styles.container}>
      {currentUser.isAuthorized ? <ChatPage /> : <LoginPage />}
    </div>
  );
}

export default App;
