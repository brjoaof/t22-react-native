import { StyleSheet, View } from "react-native";

// export function DimensaoFixa(){}

export const DimensaoFixa = () => {
  return (
    <View style={styles.container}>
      <View style={styles.fixo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
  },
  fixo: {
    width: 150,
    height: 150,
    backgroundColor: "steelblue",
  },
});
