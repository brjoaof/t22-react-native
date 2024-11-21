import { createContext, ReactNode, useState } from "react";

export const AuthContext = createContext<any>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [estaLogado, setEstaLogado] = useState(false);

  const login = () => {
    setUser("infos do usuário");
    setEstaLogado(true);
  };

  const logout = () => {
    setUser(null);
    setEstaLogado(false);
  };

  return (
    <AuthContext.Provider value={{ login, logout, estaLogado }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
