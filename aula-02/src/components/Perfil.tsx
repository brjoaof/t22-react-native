import { StyleSheet, Text, View } from "react-native";

type PerfilProps = {
  nome: string;
  sobrenome: string;
  idade: string | number;
};

const Perfil = ({ nome, sobrenome, idade }: PerfilProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{nome}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    color: "red",
    fontSize: 50,
  },
});

export default Perfil;
