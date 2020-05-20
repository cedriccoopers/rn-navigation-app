import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icons from "react-native-vector-icons/Ionicons";
import Home from "./Home";
import Details from "./Details";
import Explore from "./Explore";
import Profile from "./Profile";

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTab = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#e91e63"
    style={{ backgroundColor: "tomato" }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "Home",
        tabBarColor: "#009387",
        tabBarIcon: ({ color }) => (
          <Icons name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Notification"
      component={DetailsStackScreen}
      options={{
        tabBarLabel: "Updates",
        tabBarColor: "#009387",
        tabBarIcon: ({ color }) => (
          <Icons name="ios-notifications" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarLabel: "Profile",
        tabBarColor: "#694fad",
        tabBarIcon: ({ color }) => (
          <Icons name="ios-person" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Explore"
      component={Explore}
      options={{
        tabBarLabel: "Explore",
        tabBarColor: "#002850",
        tabBarIcon: ({ color }) => (
          <Icons name="ios-aperture" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTab;

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#009387" },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{
        title: "Overview",
        headerLeft: () => (
          <Icons.Button
            name="ios-menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}
          ></Icons.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
);

const DetailsStackScreen = ({ navigation }) => (
  <DetailsStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: "#009387" },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <DetailsStack.Screen
      name="Details"
      component={Details}
      options={{
        headerLeft: () => (
          <Icons.Button
            name="ios-menu"
            size={25}
            backgroundColor="#1f65ff"
            onPress={() => navigation.openDrawer()}
          ></Icons.Button>
        ),
      }}
    />
  </DetailsStack.Navigator>
);
