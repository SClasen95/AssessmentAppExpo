import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';

interface FilterTextProps {
  filter: string;
  isSelected: boolean;
}

function FilterText({ filter, isSelected }: FilterTextProps) {
  return (
    <View style={[styles.filterContainer, isSelected ? styles.selectedContainer : styles.unselectedContainer]}>
    <Text style={isSelected ? styles.selectedFilter : styles.filter}>{filter}</Text>
  </View>
  );
}

export default React.memo(FilterText);

const styles = StyleSheet.create({
    filterContainer: {
        borderRadius: 9,
        marginHorizontal: 5,
        paddingVertical:3,
        paddingHorizontal:13,
        marginVertical:5
      },
      selectedContainer:{
        backgroundColor: colors.blue,
      },
      unselectedContainer:{
        backgroundColor: colors.white,
      },
      filter: {
        color:colors.darkGrey,
        fontSize:16,
      },
      selectedFilter: {
        color:colors.white,
        fontSize:16,
      },
  });
  
