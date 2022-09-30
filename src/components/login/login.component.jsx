import React from "react";
import "./login.styles.scss";

const signInWithGoogle = () => {
  console.log("clicked");
};

const Login = () => {
  return (
    <div className='signIn-container'>
      <h2>Sign In</h2>
      <button onClick={signInWithGoogle}>Google Sign In</button>
    </div>
  );
};

export default Login;
