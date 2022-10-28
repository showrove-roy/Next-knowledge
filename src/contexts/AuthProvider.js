import React, { createContext, useState } from "react";
import { useContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
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

  //create User With Email And Password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Update USER Profile

  const updateUserInfo = (name, photoUrl = null) => {
    return updateUserInfo(auth.currentUser, {
      displayName: name,
      photoURL: photoUrl,
    });
  };

  //sign out a user
  const signOUT = () => {
    return signOut(auth);
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

  const authInfo = { user, signOUT, googleSignIN, createUser, updateUserInfo };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
