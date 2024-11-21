import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StackParamList } from "../types/navigation";
import LoginScreen from "../screens/LoginScreen";

const { Navigator, Screen } = createNativeStackNavigator<StackParamList>();

export const RotasPublicas = () => {
  return (
    <Navigator>
      <Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: "Faça seu Login",
          //   headerShown: false,
        }}
      />
    </Navigator>
  );
};
