import { ScrollView, View, StyleSheet, Image } from "react-native";
import { Noticia } from "./src/components/Noticia";
import { dados } from "./src/components/dados";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* <Noticia
          titulo={dados[0].titulo}
          descricao={dados[0].descricao}
          autor={dados[0].autor}
        /> */}

        {dados.map((noticia) => (
          <Noticia
            titulo={noticia.titulo}
            descricao={noticia.descricao}
            autor={noticia.autor}
            imagem={noticia.imagem}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
  },
  imagem: {
    width: 300,
    height: 200,
  },
});
