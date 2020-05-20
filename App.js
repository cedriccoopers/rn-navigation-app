import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MainTab } from "./pages/MainTab";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={MainTab} />
        {/* <Drawer.Screen name="Details" component={MainTab} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
