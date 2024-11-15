import { NavigationContainer } from "@react-navigation/native";
import { Rotas } from "./src/routes/rotas";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <NavigationContainer>
      <Rotas />
    </NavigationContainer>
  );
}
