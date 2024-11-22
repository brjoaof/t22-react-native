import { createContext, ReactNode, useState } from "react";

export const AuthContext = createContext<any>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);

  const login = (email: string, senha: string) => {
    if (email == "aluno@serratec.org" && senha == "aluno123") {
      setUser("infos do usuário");
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ login, logout, estaLogado: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
