import axios from "axios";
import { View, Text, Button } from "react-native";

const URL = "https://673bbe8096b8dcd5f3f74e9b.mockapi.io/api/tarefas";

export default function RequestScreen() {
  const obterDados = async () => {
    const { data } = await axios.get(URL);
    console.log("DADOS: ", data);
  };

  return (
    <View>
      <Text>RequestScreen</Text>
      <Button title="Obter Dados" onPress={obterDados} />
    </View>
  );
}
