import { useContext, useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { AuthContext } from "../../contexts/AuthContext";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const { login } = useContext(AuthContext);

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 16 }}>
      <Text style={{ fontSize: 35, textAlign: "center" }}>LoginScreen</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={{ backgroundColor: "#FFF", marginTop: 16 }}
      />
      <TextInput
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={{ backgroundColor: "#FFF", marginTop: 16, marginBottom: 16 }}
      />
      <Button title="ENTRAR" onPress={() => login(email, senha)} />
    </View>
  );
}
