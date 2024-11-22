import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen";
import { StackParamList } from "../types/navigation";
import DrawerNavigator from "./DrawerNavigator";

const { Navigator, Screen } = createNativeStackNavigator<StackParamList>();

export const RotasPrivadas = () => {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={DrawerNavigator}
        options={{
          //    title: "Gerenciador de Tarefas",
          headerShown: false,
        }}
      />
    </Navigator>
  );
};
