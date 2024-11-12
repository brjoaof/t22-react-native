import { StyleSheet, View } from "react-native";

export const Ex6 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.linha}>
        <View style={[styles.box, styles.box1]} />
        <View style={[styles.box, styles.box1]} />
        <View style={[styles.box, styles.box1]} />
      </View>
      <View style={styles.linha}>
        <View style={[styles.box, styles.box2]} />
        <View style={[styles.box, styles.box2]} />
        <View style={[styles.box, styles.box2]} />
      </View>
      <View style={styles.linha}>
        <View style={[styles.box, styles.box3]} />
        <View style={[styles.box, styles.box3]} />
        <View style={[styles.box, styles.box3]} />
      </View>
      <View style={styles.linha}>
        <View style={[styles.box, styles.box4]} />
        <View style={[styles.box, styles.box4]} />
        <View style={[styles.box, styles.box4]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
  },
  linha: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  box1: {
    backgroundColor: "skyblue",
  },
  box2: {
    backgroundColor: "powderblue",
  },
  box3: {
    backgroundColor: "steelblue",
  },
  box4: {
    backgroundColor: "aquamarine",
  },
  box: {
    width: 110,
    height: 110,
  },
});
