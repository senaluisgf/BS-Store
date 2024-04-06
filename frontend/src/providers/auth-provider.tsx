import { Auth } from "@/types/auth";
import { ReactNode, createContext, useContext, useState } from "react";
interface AuthContextType {
  auth: Auth | null;
  setAuth: Function;
} 

const defaultAuthContext: AuthContextType = {
  auth: null,
  setAuth: () => {}
}

export const AuthContext = createContext(defaultAuthContext)

interface AuthProviderProps {
  children: ReactNode
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('Contexto de autenticação não disponível para este componente')
  return context;
}

export default function AuthProvider({children}: AuthProviderProps) {
  const [auth, setAuth] = useState<Auth | null>(null)
  return (
    <AuthContext.Provider value={{auth, setAuth}}>
    {children}
    </AuthContext.Provider>
  )
}