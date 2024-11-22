import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerParamList } from "../types/navigation";
import BottomTabs from "./BottomTabs";
import SettingsScreen from "../screens/SettingsScreen";

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={BottomTabs}
        options={{ title: "Início" }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: "Configurações" }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
