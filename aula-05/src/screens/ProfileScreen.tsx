import { Button, Text, View } from "react-native";
import { ProfileScreenProps } from "../types/navigation";

export const ProfileScreen = ({ navigation, route }: ProfileScreenProps) => {
  const { name } = route.params;
  return (
    <View>
      <Text>Tela Profile</Text>
      <Text>Props via rota: {name}</Text>
      <Button
        title="IR PARA FEED"
        onPress={() => navigation.navigate("Feed")}
      />
    </View>
  );
};
