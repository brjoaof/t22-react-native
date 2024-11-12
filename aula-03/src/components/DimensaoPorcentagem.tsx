import { StyleSheet, View } from "react-native";

// export function DimensaoFixa(){}

export const DimensaoPorcentagem = () => {
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
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  box1: {
    backgroundColor: "powderblue",
    height: "20%",
    width: "100%",
  },
  box2: {
    backgroundColor: "skyblue",
    height: "30%",
    width: "80%",
  },
  box3: {
    backgroundColor: "steelblue",
    height: "40%",
    width: "100%",
  },
});
