import {
  FlatList,
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { tarefa } from "../../types/types";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export const HomeScreen = () => {
  const [tarefa, setTarefa] = useState("");
  const [listaTarefas, setListaTarefas] = useState<any[]>([]);

  const adicionarTarefa = () => {
    if (tarefa == "") return;
    // const novaTarefa = {
    //   id: "",
    //   titulo: "",
    //   descricao: "",
    //   status: false
    // }
    const novaTarefa = {
      titulo: tarefa,
    };

    setListaTarefas([...listaTarefas, novaTarefa]);

    setTarefa("");
  };

  const deletarTarefa = (itemIndex: number) => {
    console.log("Deletar Tarefa. Index: ", itemIndex);
    const listaFiltrada = listaTarefas.filter(
      (item, index) => index !== itemIndex
    );
    setListaTarefas(listaFiltrada);
  };

  //Texto para um lado e ícone para o outro
  //Criem uma função para excluir um item do array
  //Utilizem o filter no listaTarefas

  return (
    <View style={styles.container}>
      {/* A entrada de tarefas */}
      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          value={tarefa}
          onChangeText={setTarefa}
        />
        <Button title="Adicionar Tarefa" onPress={adicionarTarefa} />
      </View>
      {/* Exibição das tarefas */}
      <FlatList
        style={styles.lista}
        data={listaTarefas}
        renderItem={({ item, index }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText} numberOfLines={1}>
              {item.titulo}
            </Text>
            <View style={styles.iconContainer}>
              <TouchableOpacity>
                <FontAwesome name="pencil" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deletarTarefa(index)}>
                <FontAwesome name="trash-o" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    // alignItems: "center",
    // backgroundColor: "gray",
  },
  containerInput: {
    // alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#fff",
    // width: "85%",
    // alignSelf: "center",
    marginBottom: 6,
  },
  lista: {
    marginTop: 8,
  },
  itemContainer: {
    flexDirection: "row",
    backgroundColor: "steelblue",
    justifyContent: "space-between",
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
  },
  itemText: {
    fontWeight: 500,
    fontSize: 18,
    color: "#fff",
  },
  iconContainer: {
    flexDirection: "row",
    gap: 10,
  },
});
