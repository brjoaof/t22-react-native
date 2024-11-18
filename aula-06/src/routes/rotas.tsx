import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import { StackParamList } from "../types/navigation";
import RequestScreen from "../screens/RequestScreen";

const { Navigator, Screen } = createNativeStackNavigator<StackParamList>();

export const Rotas = () => {
  return (
    <Navigator>
      <Screen name="Requests" component={RequestScreen} />
      <Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Gerenciador de Tarefas",
          //   headerShown: false,
        }}
      />
    </Navigator>
  );
};
