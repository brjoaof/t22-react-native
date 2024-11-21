import { NavigationContainer } from "@react-navigation/native";
import { Rotas } from "./src/routes/rotas";
import { StatusBar } from "expo-status-bar";
import TestProvider from "./src/contexts/TesteContext";

export default function App() {
  return (
    <NavigationContainer>
      <TestProvider>
        <Rotas />
      </TestProvider>
    </NavigationContainer>
  );
}
