import { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

export const Input = () => {
  const [texto, setTexto] = useState("Texto Inicial");
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Eu sou um Componente de Input de texto</Text>;
      <TextInput style={styles.input} value={texto} onChangeText={setTexto} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  texto: {
    fontSize: 35,
    textAlign: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
