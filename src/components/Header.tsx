import React, { useContext, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  UIManager,
  LayoutAnimation,
  Platform,
} from "react-native";
import { colors } from "../utils/colors";
import Search from "./Search";
import { UserContext } from "../../App";

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

interface HeaderProps {
  onSearchPress: (str: string) => void;
  searchValue: string;
}

function Header({ onSearchPress, searchValue }: HeaderProps) {
  const [showHeader, setShowHeader] = useState(true);
  const userData = useContext(UserContext);

  const toggleHeader = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setShowHeader(!showHeader);
  };

  return (
    <View style={styles.headerContainer}>
      {/* Top Row */}
      {showHeader && (
        <View style={styles.topRow}>
          <View>
            <Text style={styles.title}>Good evening!</Text>
            <Text style={styles.subtitle}>{userData?.user?.userName}</Text>
          </View>
            {Platform.OS === "web" && ( //If its web, bring the search bar up to the top row of the header between the greeting and the profile picture
              <View style={styles.bottomRowWeb}>
                <Search
                  onFilterPress={function (): void {
                    console.log("Filter button pressed");
                  }}
                  onSearchPress={(text) => onSearchPress(text)}
                  searchValue={searchValue}
                />
              </View>
            )}
          <View style={styles.imageContainer}>
            <Image
              source={require("../assets/profile.png")}
              style={styles.image}
            />
          </View>
        </View>
      )}

      {/* Bottom Row */}
      {Platform.OS !== "web" && ( //If its not web, put the searchbar in the second row
        <View style={styles.bottomRow}>
          <Search
            onFilterPress={function (): void {
              console.log("Filter button pressed");
            }}
            onSearchPress={(text) => onSearchPress(text)}
            searchValue={searchValue}
            onFocus={toggleHeader}
            onBlur={toggleHeader}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    padding: 16,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontFamily: "exo-600",
    color: colors.darkGrey,
  },
  subtitle: {
    fontSize: 20,
    fontFamily: "exo-600",
    color: colors.grey,
  },
  imageContainer: {
    width: 62,
    height: 62,
    backgroundColor: colors.lightGrey,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
  },
  image: {
    width: 62,
    height: 62,
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  bottomRowWeb: {
    flexDirection: "row",
    alignSelf: "center",
    width: "50%",
  },
});

export default React.memo(Header);
