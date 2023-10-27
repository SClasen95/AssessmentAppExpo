import React from "react";
import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { colors } from "../utils/colors";

interface SearchBarProps {
  onFilterPress: () => void;
  onSearchPress: (str: string) => void;
  searchValue: string;
  onFocus: ()=>void;
  onBlur:()=>void;
}

const SearchBar = ({
  onFilterPress,
  onSearchPress,
  searchValue,
  onFocus,
  onBlur,
}: SearchBarProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search..."
          style={styles.input}
          onChangeText={(text) => onSearchPress(text)}
          value={searchValue}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <TouchableOpacity onPress={() => onSearchPress(searchValue)}>
          <View style={styles.iconContainer}>
            <Image
              source={require("../assets/search.png")}
              style={styles.searchIcon}
            />
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={onFilterPress}>
        <Image
          source={require("../assets/filter.png")}
          style={styles.filterIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 29,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 8,
    flex: 1,
    padding: 8,
    maxWidth: "80%",
    marginRight: 28,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4.59,
    elevation: 5,
  },
  iconContainer: {
    width: 45,
    height: 45,
    backgroundColor: colors.blue,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginRight: 8,
  },
  searchIcon: {
    width: 16,
    height: 18,
  },
  input: {
    flex: 1,
    paddingRight: 10,
    paddingLeft: 29,
  },
  filterIcon: {
    width: 29,
    height: 29,
  },
});

export default React.memo(SearchBar);
