import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import SplashScreen from "../../screens/auth/SplashScreen";
import SignInScreen from "../../screens/auth/SignInScreen";
import GradeScreen from "../../screens/app/GradeScreen";
import ProvinceScreen from "../../screens/app/ProvinceScreen";
import TabNavigator from "./TabNavigator";
import { Platform } from "react-native";
import { colors } from "../../utils/colors";

export type StackParamList = {
  SplashScreen: undefined;
  SignInScreen: undefined;
  GradeScreen: undefined;
  ProvinceScreen: undefined;
  TabNavigator: undefined;
};
const Stack = createStackNavigator<StackParamList>();

function StackNavigator() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: Platform.OS === "web",
            headerStyle: {
              backgroundColor: 'transparent',
              borderWidth:0,
            },
            headerTitle: ""
            
          }}
        >
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="SignInScreen" component={SignInScreen} />
          <Stack.Screen name="GradeScreen" component={GradeScreen} />
          <Stack.Screen name="ProvinceScreen" component={ProvinceScreen} />
          <Stack.Screen name="TabNavigator" component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default React.memo(StackNavigator);
