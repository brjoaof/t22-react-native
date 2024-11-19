import {
  FlatList,
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useEffect, useState } from "react";
import { tarefa } from "../../types/types";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import axios from "axios";

const URL = "https://673bbe8096b8dcd5f3f74e9b.mockapi.io/api/tarefas";

type TarefaEditada = {
  item: tarefa | undefined;
  editando: boolean;
};

export const HomeScreen = () => {
  const [tarefa, setTarefa] = useState("");
  const [loading, setLoading] = useState(true);
  const [listaTarefas, setListaTarefas] = useState<tarefa[]>([]);
  const [estaEditando, setEstaEditando] = useState<TarefaEditada>({
    item: undefined,
    editando: false,
  });

  const buscarTarefas = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(URL);
      setListaTarefas(data);
      console.log("Tarefas: ", data);
    } catch (err) {
      console.log("Erro ao carregar Tarefas. ", err);
    }
    setLoading(false);
  };

  const adicionarTarefa = async () => {
    if (tarefa == "") return;

    const novaTarefa = {
      titulo: tarefa,
      descricao: "",
      status: false,
    };

    try {
      const { data } = await axios.post(URL, novaTarefa);
      console.log("POST: ", data);
      setListaTarefas([...listaTarefas, data]);
      setTarefa("");
    } catch (err) {
      console.log("Erro ao carregar Tarefas. ", err);
    }
  };

  const deletarTarefa = async (id: number) => {
    try {
      const { data } = await axios.delete(URL + "/" + id);
      console.log("Tarefa Deletada: ", data);
      const listaFiltrada = listaTarefas.filter((item) => item.id !== data.id);
      setListaTarefas(listaFiltrada);
    } catch (err) {
      console.log("Erro ao deletar tarefa.", err);
    }
  };

  const editarTarefa = (itemTarefa: tarefa) => {
    setEstaEditando({
      item: itemTarefa,
      editando: true,
    });
    console.log("EDITAR TAREFA ", itemTarefa.id);
    setTarefa(itemTarefa.titulo);
  };

  const cancelar = () => {
    setEstaEditando({
      item: undefined,
      editando: false,
    });
    setTarefa("");
  };

  const salvar = async () => {
    const tarefaEdita = {
      titulo: tarefa,
      descricao: "",
      status: false,
    };

    try {
      const { data } = await axios.put(
        URL + "/" + estaEditando.item?.id,
        tarefaEdita
      );
      console.log("Tarefa Editada: ", data);
      const listaEditada = listaTarefas.map((item) => {
        if (item.id == estaEditando.item?.id) {
          return data;
        }
        return item;
      });
      setListaTarefas(listaEditada);
      setTarefa("");
      setEstaEditando({
        item: undefined,
        editando: false,
      });
    } catch (err) {
      console.log("Erro ao salvar tarefa.", err);
    }
  };

  useEffect(() => {
    buscarTarefas();
  }, []);

  return (
    <View style={styles.container}>
      {/* A entrada de tarefas */}
      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          value={tarefa}
          onChangeText={setTarefa}
        />
        {estaEditando.editando ? (
          <View style={{ gap: 5 }}>
            <Button title="cancelar" onPress={cancelar} />
            <Button title="SALVAR" onPress={salvar} />
          </View>
        ) : (
          <Button title="Adicionar Tarefa" onPress={adicionarTarefa} />
        )}
      </View>
      {/* Exibição das tarefas */}
      {loading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <FlatList
          style={styles.lista}
          data={listaTarefas}
          renderItem={({ item, index }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemText} numberOfLines={1}>
                {item.titulo}
              </Text>
              <View style={styles.iconContainer}>
                <TouchableOpacity onPress={() => editarTarefa(item)}>
                  <FontAwesome name="pencil" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deletarTarefa(item.id)}>
                  <FontAwesome name="trash-o" size={24} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
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
