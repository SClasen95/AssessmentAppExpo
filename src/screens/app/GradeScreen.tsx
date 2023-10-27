import React, { useState } from "react";
import ExpandableDropdown from "../../components/ExpandableDropdown";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../utils/colors";
import Button from "../../components/Button";
import { Grades } from "../../data/Grades";
import { StackScreenProps } from "@react-navigation/stack";
import { StackParamList } from "../../components/navigators/StackNavigator";

interface GradeScreenNavigationProp
  extends StackScreenProps<StackParamList, "GradeScreen"> {}

function GradeScreen({ navigation }: GradeScreenNavigationProp) {
  const [selectedOption, setSelectedOption] = useState<number>();
  const titles = ["Grade 1 - 5", "Grade 6 - 9", "Grade 10 - 11", "Grade 12 - 13"];

  function onSelect(index: number|undefined) {
    setSelectedOption(index);
  }

  function onSkipPress(){
    navigation.navigate("ProvinceScreen")
  }

  function onButtonPress(){
    navigation.navigate("ProvinceScreen")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What's your grade?</Text>
      <View style={styles.dropdownContainer}>
        {titles.map((title, index) => (
          <ExpandableDropdown
            title={title}
            onSelect={() => onSelect(index)}
            onClose={() => onSelect(undefined)}
            isOpen={index === selectedOption}
            options={Grades}
            isExpandable
            key = {index}
          />
        ))}
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
    flex: 1,
  },
  title: {
    color: colors.darkGrey,
    fontFamily:'exo-600',
    fontSize: 25,    
    marginTop: 30,
  },
  dropdownContainer: {
    marginTop: 31,
  },
  buttonContainer: {
    width: "80%",
    alignSelf: "center",
    position: "absolute",
    bottom: 76,
  },
  skip: {
    fontFamily:'exo-400',
    color: colors.blue,
    fontSize: 18,
    textAlign: "center",
    marginTop: 33,
  },
});

export default React.memo(GradeScreen);
