/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from "react";
import { Platform, StatusBar, useColorScheme } from "react-native";
import StackNavigator from "./src/components/navigators/StackNavigator";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { colors } from "./src/utils/colors";

interface UserData {
  userName: string;
  email: string;
  password: string;
}

const getFonts = () =>
  Font.loadAsync({
    "exo-300": require("./src/assets/fonts/static/Exo-Light.ttf"),
    "exo-400": require("./src/assets/fonts/static/Exo-Regular.ttf"),
    "exo-500": require("./src/assets/fonts/static/Exo-Medium.ttf"),
    "exo-600": require("./src/assets/fonts/static/Exo-SemiBold.ttf"),
  });

export const UserContext = React.createContext<
  | {
      user: UserData | undefined;
      setUser: (
        user:
          | {
              userName: string;
              email: string;
              password: string;
            }
          | undefined
      ) => void;
    }
  | undefined
>(undefined);

function App() {
  const isDarkMode = useColorScheme() === "dark";
  const [user, setUser] = useState<UserData | undefined>(undefined);
  const [fontsLoaded, setFontsLoaded] = useState(false);


  if (fontsLoaded) {
    return (
      <>
        <StatusBar
          barStyle={isDarkMode ? "light-content" : "dark-content"}
          backgroundColor={colors.background}
        />
        <UserContext.Provider value={{ user, setUser }}>
          <StackNavigator />
        </UserContext.Provider>
      </>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={()=>console.log("Error loading fonts.")}
      />
    );
  }
}

export default React.memo(App);
