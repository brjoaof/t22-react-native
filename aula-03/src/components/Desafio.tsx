import { Text, View, StyleSheet } from "react-native";
import Superior from "./Superior";

export const Desafio = () => {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar} />
      <Superior />
      <View style={styles.menu}>
        <View style={styles.esq} />
        <View style={styles.dir} />
      </View>
      <View style={styles.feed}>
        <View style={styles.quadrado} />
        <View style={styles.quadrado} />
        <View style={styles.quadrado} />
        <View style={styles.quadrado} />
        <View style={styles.quadrado} />
        <View style={styles.quadrado} />
      </View>
      <View style={styles.footer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    width: "100%",
    height: 30,
    backgroundColor: "aquamarine",
  },
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
  menu: {
    flex: 2,
    flexDirection: "row",
    backgroundColor: "aquamarine",
  },
  esq: {
    backgroundColor: "purple",
    width: "50%",
    height: "90%",
  },
  dir: {
    backgroundColor: "steelblue",
    width: "50%",
    height: "90%",
  },
  feed: {
    flex: 8,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "space-evenly",
    justifyContent: "space-around",
    gap: 5,
  },
  footer: {
    flex: 1.5,
    backgroundColor: "steelblue",
  },
});
