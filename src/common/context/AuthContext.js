import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
      setAuthenticated(true);
    }
  }, []);

  const signin = async (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUserId(user.uid);
        setUserEmail(user.email);
        setAuthenticated(true);

        localStorage.setItem("userId", user.uid);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, errorMessage);
      });
  };

  const login = async (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("🚀 ~ file: AuthContext.js:46 ~ .then ~ user:", user);
        setUserId(user.uid);
        setUserEmail(user.email);
        setAuthenticated(true);

        localStorage.setItem("userId", user.uid);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert("Invalid credentials, Try Again");

        console.log(errorCode, errorMessage);
      });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        setAuthenticated(false);
        setUserEmail("");
        localStorage.removeItem("userId");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function forgotPassword(email) {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Password reset mail sent to", email);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        signin,
        logout,
        userId,
        login,
        forgotPassword,
        userEmail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
