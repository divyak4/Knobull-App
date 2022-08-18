import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import React from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";

import Home from "./screens/Home";
import About from "./screens/About";
import MessageBoard from "./screens/MessageBoard";
import Blog from "./screens/Blog";
import Contact from "./screens/Contact";
import Privacy from "./screens/Privacy";
import Resources from "./screens/Resources";
import StudentNews from "./screens/StudentNews";

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar  barStyle="dark-content" translucent={true} />
        <Drawer.Navigator useLegacyImplementation={true} initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="About" component={About} />
          <Drawer.Screen name="Message Board" component={MessageBoard} />
          <Drawer.Screen name="Blog" component={Blog} />
          <Drawer.Screen name="Contact" component={Contact} />
          <Drawer.Screen name="Privacy" component={Privacy} />
          <Drawer.Screen name="Resources" component={Resources} />
          <Drawer.Screen name="Student News" component={StudentNews} />
        </Drawer.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}
