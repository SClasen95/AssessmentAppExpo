import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../utils/colors";
import FilterText from "./FilterText";

interface FilterProps {
  title: string;
  filters: string[];
  onSelect: (filter: string) => void;
  selected: string|null;
}

function Filter({ title, filters, onSelect, selected }: FilterProps) {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.filtersContainer}>
        {filters.map((filter, index) => (
          <TouchableOpacity
            activeOpacity={1}
            key={filter}
            onPress={() => onSelect(filter)}
          >
            <FilterText
              filter={filter}
              key={index}
              isSelected={filter === selected}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

export default React.memo(Filter);

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 12,
    fontWeight: "bold",
    color: colors.grey,
    marginBottom: 12,
  },

  filtersContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 15,
  },
});
