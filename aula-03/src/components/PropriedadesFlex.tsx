import { StyleSheet, View } from "react-native";

export const PropriedadesFlex = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1} />
      <View style={styles.box2} />
      <View style={styles.box3} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  box1: {
    backgroundColor: "powderblue",
    height: 100,
    width: 100,
    alignSelf: "flex-end",
  },
  box2: {
    backgroundColor: "skyblue",
    height: 100,
    width: 100,
  },
  box3: {
    backgroundColor: "steelblue",
    height: 100,
    width: 100,
  },
});
