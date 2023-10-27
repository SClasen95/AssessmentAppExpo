import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreen from "../../screens/app/MainScreen";
import { colors } from "../../utils/colors";
import { Image, StyleSheet } from 'react-native';



const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Tab1"
        component={MainScreen}
        options={{
          tabBarLabel: "Explore",
          tabBarLabelStyle: styles.tabFont,
          tabBarStyle:styles.tabBar,
          tabBarIcon: ({ focused, color, size }) => {
            let icon: any;
            icon = focused
              ? require("./../../assets/explore-focused.png")
              : require("./../../assets/stream.png");//I intentionally put the wrong icon here, given that i dont have an icon for unfocused explore
            return <Image style={{ width: 26, height: 26 }} source={icon} />;
          },
        }}
      />
      <Tab.Screen
        name="Tab2"
        component={Tab2Screen}
        options={{
          tabBarLabel: "Stream",
          tabBarLabelStyle: styles.tabFont,
          tabBarStyle:styles.tabBar,
          tabBarIcon: ({ focused, color, size }) => {
            let icon: any;
            icon = focused
              ? require("./../../assets/explore-focused.png")//I intentionally put the wrong icon here, given that i dont have an icon for focused stream
              : require("./../../assets/stream.png"); 
            return <Image style={{ width: 26, height: 26 }} source={icon} />;
          },
        }}
      />
      <Tab.Screen
        name="Tab3"
        component={Tab3Screen}
        options={{
          tabBarLabel: "ClassWork",
          tabBarLabelStyle: styles.tabFont,
          tabBarStyle:styles.tabBar,
          tabBarIcon: ({ focused, color, size }) => {
            let icon: any;
            icon = focused
              ? require("./../../assets/explore-focused.png")//I intentionally put the wrong icon here, given that i dont have an icon for focused classwork
              : require("./../../assets/classwork.png"); 
            return <Image style={{ width: 26, height: 26 }} source={icon} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

function Tab2Screen() {
  return null;
}

function Tab3Screen() {

  return null;
}

export default React.memo(TabNavigator);

const styles = StyleSheet.create({
    tabBar:{
        borderTopEndRadius:14,
        borderTopStartRadius:14,
        backgroundColor:colors.white,
        padding:10,
        height:70
    },
    tabFont:{
        fontSize:14,
        fontWeight:'500'
    }
  });
  
