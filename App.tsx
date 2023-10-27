/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from "react";
import { Platform, StatusBar, useColorScheme } from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";
import StackNavigator from "./src/components/navigators/StackNavigator";

interface UserData {
  userName: string;
  email: string;
  password: string;
}

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
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <UserContext.Provider value={{ user, setUser }}>
        <StackNavigator />
      </UserContext.Provider>
    </>
  );
}

export default React.memo(App);
