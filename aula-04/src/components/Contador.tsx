import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

type ContadorProps = {
  contador: number;
  setContador: (contador: number) => void;
};

export default function Contador({ contador, setContador }: ContadorProps) {
  //   const [contador, setContador] = useState(0);

  const handlePress = () => {
    console.log("Fui clicado!");
    // contador = contador + 1;
    // contador += 1;
    setContador(contador + 1);
    console.log("Contador: ", contador);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{contador}</Text>
      <Button title="clique aqui" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    fontSize: 200,
  },
});
