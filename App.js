import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainTab from "./pages/MainTab";

import { DrawerContent } from "./pages/DrawerContent";
import Support from "./pages/Support";
import Setting from "./pages/Setting";
import Bookmark from "./pages/Bookmark";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeDrawer" component={MainTab} />
        <Drawer.Screen name="Setting" component={Setting} />
        <Drawer.Screen name="Support" component={Support} />
        <Drawer.Screen name="Bookmark" component={Bookmark} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
