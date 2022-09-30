import { useContext } from "react";

import Login from "./components/login/login.component";
import { UserContext } from "./contexts/auth.context";
import "./App.css";

function App() {
  const { user } = useContext(UserContext);
  return (
    <div className='App'>
      <h1>{user}</h1>
      <Login />
    </div>
  );
}

export default App;
