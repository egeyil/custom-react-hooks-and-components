import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

export type AuthType = {
  user: object;
  accessToken: string;
}

export interface IAuthContext {
  auth: AuthType;
  setAuth: Dispatch<SetStateAction<AuthType | {}>>;
}

const AuthContext = createContext({});

export const AuthProvider = ({ children }: { children: ReactNode}) => {
  const [auth, setAuth] = useState<AuthType | {}>({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;