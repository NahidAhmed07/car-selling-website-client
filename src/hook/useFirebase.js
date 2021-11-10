import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import initializeFirebase from "../pages/Login/Firebase/firebase.init";

initializeFirebase();

const useFirebase = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState({});
  const [authError, setAuthError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  //##signIn using google
  const googleSignIn = () => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setAuthError("");
        console.log(user);
      })
      .catch((err) => {
        setAuthError(err.message);
      })
      .finally(() => setIsLoading(false));
  };

  const logout = () => {
    signOut(auth)
      .then(() => setUser({}))
      .catch((err) => setAuthError(err.message));
  };

  //### onState change
  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });

    return () => unsubscribe;
  }, [auth]);

  return {
    user,
    setUser,
    logout,
    googleSignIn,
    authError,
    isLoading,
  };
};

export default useFirebase;
