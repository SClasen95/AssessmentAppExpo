import React from "react";
import ExpandableDropdown from "../../components/ExpandableDropdown";
import { Platform, StyleSheet, Text, View } from "react-native";
import { colors } from "../../utils/colors";
import Button from "../../components/Button";
import { Provinces } from "../../data/Provinces";
import { StackScreenProps } from "@react-navigation/stack";
import { StackParamList } from "../../components/navigators/StackNavigator";



interface ProvinceScreenNavigationProp
  extends StackScreenProps<StackParamList, "ProvinceScreen"> {}

function ProvinceScreen({navigation} : ProvinceScreenNavigationProp) {

  function onSkipPress(){
    navigation.navigate("TabNavigator")
  }

  function onButtonPress(){
    navigation.navigate("TabNavigator")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What's your province?</Text>
      <View style={styles.dropdownContainer}>
        <ExpandableDropdown
          title="Provinces of Sri Lanka"
          options={Provinces}
          isExpandable={false}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={"Next"}
          onPress={onButtonPress}
        />
        <Text onPress={onSkipPress} style={styles.skip}>Skip</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 33,

    minHeight: "100%",
  },
  title: {
    color: colors.darkGrey,
    fontSize: 25,
    fontFamily:'exo-600',
    marginTop: 30,
  },
  dropdownContainer: {
    marginTop: 31,
    width: Platform.OS ==="web" ? "25%" : "100%",
    alignSelf:'center'
  },
  buttonContainer: {
    width: Platform.OS ==="web" ? "25%" : "80%",
    alignSelf: "center",
    position: "absolute",
    bottom: 76,
  },
  skip: {
    color: colors.blue,
    fontSize: 18,
    textAlign: "center",
    marginTop: 33,
  },
});

export default React.memo(ProvinceScreen);
