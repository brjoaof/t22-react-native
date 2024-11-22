import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { Rotas } from "./src/routes/rotas";
import TestProvider from "./src/contexts/TesteContext";
import AuthProvider from "./src/contexts/AuthContext";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <TestProvider>
          <Rotas />
        </TestProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}
