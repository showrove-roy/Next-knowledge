import React, { createContext, useState } from "react";
import { useContext } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { useEffect } from "react";

// create context
const AuthContext = createContext();

// Export Context Function
export const useAuthInfo = () => {
  const authInf = useContext(AuthContext);
  return authInf;
};

// get auth
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  // Get Google Provider
  const googleProvider = new GoogleAuthProvider();

  // GOOGlE sign in function
  const googleSignIN = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Get the currently signed-in user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // User data
  const [user, setUser] = useState(null);

  const authInfo = { user, googleSignIN };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
