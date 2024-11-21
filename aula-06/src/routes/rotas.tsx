import { useContext } from "react";
import { RotasPrivadas } from "./RotasPrivadas";
import { RotasPublicas } from "./RotasPublicas";
import { AuthContext } from "../contexts/AuthContext";

export const Rotas = () => {
  const { estaLogado } = useContext(AuthContext);
  return <>{estaLogado ? <RotasPrivadas /> : <RotasPublicas />}</>;
};
