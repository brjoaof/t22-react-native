import { StyleSheet, View } from "react-native";

export const Ex2 = () => {
  return (
    <View style={style.container}>
      <View style={style.box} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  box: {
    height: "15%",
    width: "100%",
    backgroundColor: "steelblue",
  },
});
