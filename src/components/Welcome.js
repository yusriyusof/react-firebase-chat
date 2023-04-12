import React from "react";

// Firebase
import { auth } from '../utilities/firebase';
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

import signInButton from '../assets/images/sign-in.png'

const Welcome = () => {
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <main className="welcome">
      <h2>Welcome to React Chat</h2>
      <img src="/logo512.png" alt="ReactJs logo" width={50} height={50} />
      <p>Sign in with Google to chat with with your fellow React Developers.</p>
      <button className="sign-in">
        <img
          onClick={googleSignIn}
          src={signInButton}
          alt="sign in with google"
          type="button"
        />
      </button>
    </main>
  );
}

export default Welcome;