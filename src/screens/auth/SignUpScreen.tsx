import React, { useContext, useState } from "react";
import { Image, StyleSheet, Text, View, Alert } from "react-native";
import Button from "../../components/Button";
import { colors } from "../../utils/colors";
import Input from "../../components/Input";
import { StackScreenProps } from "@react-navigation/stack";
import { UserContext } from "../../../App";
import { ScrollView } from "react-native-gesture-handler";
import { ValidUserType } from "../../data/ValidUsers";
import { StackParamList } from "../../components/navigators/StackNavigator";

interface SignUpScreenNavigationProp
  extends StackScreenProps<StackParamList, "SignUpScreen"> {}

function SignUpScreen({ navigation }: SignUpScreenNavigationProp) {
  const userData = useContext(UserContext);
  const [values, setValues] = useState<ValidUserType>({
    userName: "",
    email: "",
    password: "",
  });

  const onChange = (key: string, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
  };

  function onSignUp() {
    // Store the user input in the context
    if (
      values.email === "" ||
      values.password === "" ||
      values.userName === ""
    ) {
      Alert.alert("Invalid Fields", "Must fill in all fields.");
    } else {
      userData?.setUser(values);
      navigation.navigate("GradeScreen");
    }
  }

  function onSignIn() {
    navigation.navigate("SignInScreen");
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require("../../assets/signup.png")}
        />
        <View style={styles.inputContainer}>
          <Input
            label={"Name"}
            placeholder={"Your name"}
            onChangeText={(v) => onChange("userName", v)}
          />
          <Input
            label={"Email address"}
            placeholder={"name@example.com"}
            keyboardType="email-address"
            onChangeText={(v) => onChange("email", v)}
          />
          <Input
            label={"Password"}
            placeholder={"*********"}
            isPassword
            onChangeText={(v) => onChange("password", v)}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button title={"Sign Up"} onPress={onSignUp} />
          <Text style={styles.footerText}>
            You have account?
            <Text style={styles.footerLink} onPress={onSignIn}>
              {" "}
              Sign In
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default React.memo(SignUpScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 34,
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    width: 353,
    height: 235,
  },
  inputContainer: {
    marginTop: 51,
  },
  buttonContainer: {
    width: "80%",
    position: "relative",
    marginBottom: 76,
  },
  footerText: {
    fontFamily:'exo-400',
    color: colors.grey,
    marginTop: 33,
    fontSize: 18,
    textAlign: "center",
  },
  footerLink: {
    fontFamily:'exo-400',
    color: colors.blue,
  },
});
