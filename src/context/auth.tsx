import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";

// Firebase 
import { getUser, signOut } from "../firebase/user";

// Interfaces
interface IUser {
  email: string;
  name: string;
  phone: string;
  uid: string;

}
interface AuthContextData {
  user: any;
  isLoading: boolean;
  loadUser: (uid: string) => void;
  signOutApp: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<IUser>();
  const [isLoading, setIsLoading] = useState(false);

  async function signOutApp() {
    try {  
      await signOut();
      
      setUser(undefined);

    } catch (error) {
      throw new Error("Ops!, Ocorreu um error.");
    }
  }
  async function loadUser(uid: string) {
    try {
      
      const dataUser = await getUser(uid) as IUser;
      
      setUser(dataUser);

    } catch (error) {
      throw new Error("Ops!, Ocorreu um error.");
    }
  }

  return (
    <AuthContext.Provider value={{
      user,
      isLoading,
      loadUser,
      signOutApp
    }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
