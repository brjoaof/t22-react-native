import { StyleSheet, View } from "react-native";

export const Ex1 = () => {
  return (
    <View style={style.container}>
      <View style={style.box} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  box: {
    height: "100%",
    width: "30%",
    backgroundColor: "steelblue",
  },
});
