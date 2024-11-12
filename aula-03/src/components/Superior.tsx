import { View, StyleSheet } from "react-native";

export default function Superior() {
  return (
    <View style={styles.superior}>
      <View style={styles.quadrado} />
      <View style={styles.retangulo} />
    </View>
  );
}

const styles = StyleSheet.create({
  superior: {
    flex: 8,
    alignItems: "center",
    justifyContent: "center",
    gap: 25,
  },
  quadrado: {
    width: 100,
    height: 100,
    backgroundColor: "#F4a100",
  },
  retangulo: {
    width: 170,
    height: 40,
    backgroundColor: "#F4a100",
  },
});
