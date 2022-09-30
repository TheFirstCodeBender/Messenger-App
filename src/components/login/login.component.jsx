import React, { useContext } from "react";
import "./login.styles.scss";
import { UserContext } from "../../contexts/auth.context";
import { signInWithGoogleRedirect } from "../../utils/firebase.utils";

const Login = () => {
  const { user, setUser } = useContext(UserContext);

  const signInWithGoogle = async () => {
    const { user } = await signInWithGoogleRedirect();
    console.log(user);
    setUser(user);
  };
  return (
    <div className='signIn-container'>
      {user ? <h2>Sign out</h2> : <h2>Sign In</h2>}
      {console.log(user)}
      <button onClick={signInWithGoogle}>Google Sign In</button>
    </div>
  );
};

export default Login;
