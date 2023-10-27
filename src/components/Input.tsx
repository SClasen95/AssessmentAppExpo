import React, { useState } from "react";
import {
  TextInput,
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  KeyboardTypeOptions,
} from "react-native";
import { colors } from "../utils/colors";

interface InputProps {
  label: string;
  isPassword?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder: string;
  style?: object;
  keyboardType?: KeyboardTypeOptions;
}

function Input({
  label,
  isPassword,
  value,
  onChangeText,
  placeholder,
  style,
  ...props
}: InputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const onEyePress = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.inputContainer}>
        <TextInput
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
          secureTextEntry={isPassword && !isPasswordVisible}
          style={[styles.input, style]}
          {...props}
        />
        {isPassword ? (
          <Pressable onPress={onEyePress}>
            <Image
              style={styles.eye}
              source={
                isPasswordVisible
                  ? require("../assets/eye.png")
                  : require("../assets/eye_closed.png")
              }
            />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
}

export default React.memo(Input);

export const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    minWidth: "100%",
  },
  label: {
    marginBottom: 8,
    color: colors.grey,
    fontSize: 16,
    fontFamily: "exo-500",
  },
  inputContainer: {
    backgroundColor: colors.white,
    borderRadius: 14,
    borderColor: colors.grey,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17,
    shadowRadius: 2.54,
    elevation: 3,
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    flex: 1,
  },
  eye: {
    width: 15,
    height: 12,
    marginHorizontal: 16,
  },
  arrow: {
    width: 24,
    height: 24,
    marginHorizontal: 16,
    transform: [{ rotate: "270deg" }],
  },
  placeholder: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    flex: 1,
    color: colors.lightGrey,
  },
});
