import React from "react";

// Firebase
import { auth } from '../utilities/firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

import signInButton from '../assets/images/sign-in.png'

const Navbar = () => {
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const googleSignOut = () => {
    auth.signOut();
  };

  return (
    <nav className="nav-bar">
      <h1>React Chat</h1>
      {
        user ? (
          <button className="sign-out" onClick={googleSignOut} type="button">
            Sign Out
          </button>
        ) : (
          <button className="sign-in" onClick={googleSignIn} type="button">
            <img src={signInButton} alt="google sign in" width={150} />
          </button>
        )
      }
    </nav>
  );
}

export default Navbar;