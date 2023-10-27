import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors } from "../utils/colors";

interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: any;
}

function Button({ title, onPress, style }: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.container, style]}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

export default React.memo(Button);

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    paddingVertical: 20,
    paddingHorizontal: 8,
    borderRadius: 8,
    width:'100%'
  },
  title: {
    fontFamily:'exo-600',
    color: colors.white,
    textAlign: "center",
    fontSize: 20,
  },
});
