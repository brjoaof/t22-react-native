import { Text, View, StyleSheet, Image } from "react-native";

type NoticiaProps = {
  titulo: string;
  descricao: string;
  autor: string;
  imagem: string;
};

export const Noticia = ({ titulo, descricao, autor, imagem }: NoticiaProps) => {
  return (
    <View>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.descricao}>{descricao}</Text>
      <Text style={styles.autor}>{autor}</Text>
      <Image
        style={styles.imagem}
        source={{
          uri: imagem,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titulo: {
    fontSize: 50,
  },
  descricao: {
    fontSize: 35,
  },
  autor: {
    fontSize: 25,
  },
  imagem: {
    width: 200,
    height: 300,
  },
});
