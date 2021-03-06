import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getIdToken,
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
  const [isAdmin, setIsAdmin] = useState(false);

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
        };
        // save user information to database
        saveToDatabase(saveUser, "PUT");
        // redirect to
        history.push(location?.state?.from || "/dashboard");
        setAuthError("");
        // alert login success message
        swal(`Hi ! ${user.displayName}`, "Successfully Login", "success");
      })
      .catch((err) => {
        setAuthError(err.message);
      })
      .finally(() => setIsLoading(false));
  };

  //## register new user with email and password
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
        // const user = userCredential.user;
        // add user displayName
        addDisplayName(displayName);

        // user set local state
        const newUser = { email, displayName, role: "user" };
        setUser(newUser);
        // save user information to database
        saveToDatabase(newUser, "POST");
        history.push(location?.state?.from || "/dashboard");
        swal(`Hi ! ${displayName}`, "Registration Successful", "success");
      })
      .catch((error) => {
        //alert error message
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
        //redirect to
        history.push(location?.state?.from || "/dashboard");
        // alert success message
        swal(`Hi ! ${user.displayName}`, "Successfully Login", "success");
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
        // check error type and then alert with error message
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
      .then(() => {
        setUser({});
        setIsLoading(false);
      })
      .catch((err) => setAuthError(err.message))
      .finally(() => setIsLoading(false));
  };

  //## user information sent to database function
  const saveToDatabase = (user, method) => {
    user.createdAt = new Date();
    fetch("https://fierce-forest-16777.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {})
      .catch((err) => console.log(err.message));
  };

  //### onState change
  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        // get user jwt token
        getIdToken(user).then((idToken) => {
          localStorage.setItem("idToken", idToken);
        });
      } else {
        setUser({});
      }
      setIsLoading(false);
    });

    return () => unsubscribe;
  }, [auth]);

  // check is admin
  useEffect(() => {
    if (user.email) {
      setIsLoading(true);
      fetch(
        `https://fierce-forest-16777.herokuapp.com/admin?email=${user.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("idToken")}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setIsAdmin(data.isAdmin);
        })
        .catch((err) => console.log(err.message))
        .finally(() => setIsLoading(false));
    }
  }, [user.email]);

  return {
    user,
    setUser,
    isAdmin,
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
