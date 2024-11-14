import { Button, StyleSheet, Text, View } from "react-native";
import { HomeScreenProps } from "../types/navigation";

export const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>Tela HOME</Text>
      <Button
        title="ir para Profile"
        onPress={() => navigation.navigate("Profile", { name: "João Felipe" })}
      />
      <Button
        title="ir para Feed"
        onPress={() => navigation.navigate("Feed")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 7,
  },
});
