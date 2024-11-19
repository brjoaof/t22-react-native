import axios from "axios";
import { useEffect, useState } from "react";
import { View, Text, Button, FlatList } from "react-native";

const URL = "https://673bbe8096b8dcd5f3f74e9b.mockapi.io/api/tarefas";

export default function RequestScreen() {
  const [listaTarefas, setListaTarefas] = useState<any>([]);

  const obterDados = async () => {
    try {
      const { data } = await axios.get(URL);
      setListaTarefas(data);
      // Não é possível utilizar um state que acabou de ser setado.
      // Não dá tempo de executar o setState, o dado virá vazio.
      console.log("DADOS: ", data);
    } catch (err) {
      console.log("Erro ao carregar Tarefas. ", err);
    }
  };

  useEffect(() => {
    obterDados();
  }, []);

  //   useEffect(() => {
  //     const obterDados = async () => {
  //       try {
  //         const { data } = await axios.get(URL);
  //         setListaTarefas(data);
  //         console.log("DADOS: ", data);
  //       } catch (err) {
  //         console.log("Erro ao carregar Tarefas. ", err);
  //       }
  //     };
  //     obterDados();
  //   }, []);

  return (
    <View>
      <Text>RequestScreen</Text>
      <Button title="Obter Dados" onPress={obterDados} />
      <FlatList
        data={listaTarefas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.titulo}</Text>}
      />
    </View>
  );
}
