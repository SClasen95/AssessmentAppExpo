import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { colors } from "../utils/colors";
import GradeItem from "./GradeItem";
import { ProvinceType } from "../data/Provinces";
import { GradeType } from "../data/Grades";

interface ExpandableDropdownProps {
  title: string;
  options: ProvinceType[] | GradeType[];
  isExpandable: boolean;
  onSelect?: () => void;
  isOpen?: boolean;
  onClose?: () => void;
}

function ExpandableDropdown({
  title,
  options,
  isExpandable,
  onSelect,
  isOpen,
  onClose,
}: ExpandableDropdownProps) {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(undefined);

  const toggleExpand = () => {
    isOpen ? onClose!() : onSelect!();
  };
  const onItemPress = (title: string|undefined) => {
    setSelectedOption(title);
  };

  const numberOfColumns = 2;
  const columnWidth = 100 / numberOfColumns;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.header}
        onPress={isExpandable ? toggleExpand : undefined}
      >
        <Text style={styles.title}>{title}</Text>
        {isExpandable && (
          <Image
            style={styles.arrow}
            source={
              isOpen
                ? require("../assets/uparrow.png")
                : require("../assets/downarrow.png")
            }
          />
        )}
      </TouchableOpacity>

      {(!isExpandable || isOpen) && (
        <View style={styles.expandedOptions}>
          <View style={styles.optionsGrid}>
            {options.map((option, index) => (
              <TouchableOpacity
                activeOpacity={1}
                key={option.title}
                style={{ width: `${columnWidth}%` }}
                onPress={() => onItemPress(option.title)} 
              >
                <GradeItem
                  imgReq = {option.type==="grade"}
                  title={option.title}
                  imageSource={option.type==="grade" ? option.image : null}
                  isSelected={option.title === selectedOption} 
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: colors.cream,
    borderWidth: 2,
    borderRadius: 8,
    marginTop: 18,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: colors.cream,
  },
  title: {
    fontWeight: "bold",
    fontSize:18,
    color:colors.grey,
  },
  arrow: {
    width: 20,
    height: 20,
    transform: [{ scaleY: 1 }],
  },
  expandedOptions: {
    padding: 10,
    backgroundColor: colors.cream,
    borderColor: colors.cream,
    borderTopWidth: 0,
  },
  optionsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  optionText: {
    padding: 5,
    width: "48%",
  },
});

export default React.memo(ExpandableDropdown);
