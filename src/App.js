import React from "react";
import "./App.css";

// Firebase
import { auth } from './utilities/firebase';
import { useAuthState } from "react-firebase-hooks/auth";

import Navbar from "./components/NavBar";
import Welcome from "./components/Welcome";
import ChatBox from "./components/ChatBox";

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <Navbar />
      {!user ? <Welcome /> : <ChatBox />}
    </div>
  );
}

export default App;