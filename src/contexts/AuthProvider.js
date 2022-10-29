import React, { createContext, useState } from "react";
import { useContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
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
  // loading state
  const [loading, setLoading] = useState(true);

  // Get Google Provider
  const googleProvider = new GoogleAuthProvider();

  // Github  Provider
  const githubProvider = new GithubAuthProvider();

  // GOOGlE sign in function
  const googleSignIN = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //create User With Email And Password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Update USER Profile
  const updateUserInfo = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  // Sign in a user with an email address and password
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // github login function
  const gitHubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };
  //sign out a user
  const signOUT = () => {
    return signOut(auth);
  };

  // Get the currently signed-in user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // User data
  const [user, setUser] = useState(null);

  const authInfo = {
    user,
    signOUT,
    googleSignIN,
    createUser,
    updateUserInfo,
    gitHubLogin,
    loginUser,
    loading,
    setLoading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
