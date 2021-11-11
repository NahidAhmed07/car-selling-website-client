import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import initializeFirebase from "../pages/Login/Firebase/firebase.init";
import swal from "sweetalert";

initializeFirebase();

const useFirebase = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState({});
  const [authError, setAuthError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  //##signIn using google
  const googleSignIn = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        const saveUser = {
          email: user.email,
          displayName: user.displayName,
          role: "user",
        };
        saveToDatabase(saveUser, "PUT");
        history.push(location?.state?.from || "/");
        setAuthError("");
        swal(`Hi ! ${user.displayName}`, "Successfully Login", "success");
      })
      .catch((err) => {
        setAuthError(err.message);
      })
      .finally(() => setIsLoading(false));
  };

  //## register user
  const registerWithEmail = (
    email,
    password,
    displayName,
    location,
    history
  ) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // add user displayName
        addDisplayName(displayName);

        // user set local state
        const newUser = { email, displayName, role: "user" };
        setUser(newUser);
        saveToDatabase(newUser, "POST");
        history.push(location?.state?.from || "/");
        swal(`Hi ! ${user.displayName}`, "Registration Successful", "success");
      })
      .catch((error) => {
        setAuthError(error.message);
        swal(`Registration Failed !`, error.message, "error");
      })
      .finally(() => setIsLoading(false));
  };

  //## add user display name
  const addDisplayName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {})
      .catch((error) => setAuthError(error.message));
  };

  //## login with email and password
  const loginWithEmail = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        history.push(location?.state?.from || "/");
        swal(`Hi ! ${user.displayName}`, "Successfully Login", "success");
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
        if (error?.message.includes("user-not-found")) {
          setAuthError("User not Found");
          swal(`Login Failed !`, "User not Found", "error");
        }
        if (error?.message.includes("wrong-password")) {
          setAuthError("invalid username and password");
          swal(`Login Failed !`, "invalid username and password", "error");
        }
      })
      .finally(() => setIsLoading(false));
  };
  //## logout
  const logout = () => {
    signOut(auth)
      .then(() => setUser({}))
      .catch((err) => setAuthError(err.message));
  };

  //## user information sent to database
  const saveToDatabase = (user, method) => {
    fetch("http://localhost:5000/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err.message));
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
    setAuthError,
    setIsLoading,
    registerWithEmail,
    loginWithEmail,
    authError,
    isLoading,
  };
};

export default useFirebase;
