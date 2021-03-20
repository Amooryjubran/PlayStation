import React, { useEffect, useState } from "react";
import firebaseConfig from "../../firebase.js";
import Spinner from "./Spinner.js";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      firebaseConfig.auth().onAuthStateChanged((user) => {
        setCurrentUser(user);
        setLoading(false);
      });
    }, 4000);
  }, []);

  if (loading) {
    return <Spinner />;
  }
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
