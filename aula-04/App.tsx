import { useState } from "react";
import Contador from "./src/components/Contador";
import { Input } from "./src/components/Input";

export default function App() {
  const [contador, setContador] = useState(0);

  return (
    <>
      <Contador contador={contador} setContador={setContador} />
      {/* <Contador contador={contador} setContador={setContador} /> */}
      <Input />
    </>
  );
}
