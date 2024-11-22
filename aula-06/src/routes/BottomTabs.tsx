import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabsParamList } from "../types/navigation";
import ProfileScreen from "../screens/ProfileScreen";
import { HomeScreen } from "../screens/HomeScreen";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tabs = createBottomTabNavigator<BottomTabsParamList>();

const BottomTabs = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          // Escolhe o ícone com base na rota
          if (route.name === "Tarefas") {
            iconName = focused ? "list" : "list-outline";
          } else if (route.name === "Perfil") {
            iconName = focused ? "person" : "person-outline";
          } else {
            iconName = "help-circle-outline";
          }

          // Retorna o ícone do Ionicons
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "blue", // Cor ativa
        tabBarInactiveTintColor: "gray", // Cor inativa
        tabBarStyle: { backgroundColor: "#f8f8f8" }, // Estilo da barra
      })}
    >
      <Tabs.Screen
        name="Tarefas"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tabs.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tabs.Navigator>
  );
};

export default BottomTabs;
