import React, { useContext, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Alert,
  Platform,
  ScrollView,
} from "react-native";
import Button from "../../components/Button";
import { colors } from "../../utils/colors";
import Input from "../../components/Input";
import { StackScreenProps } from "@react-navigation/stack";
import { UserContext } from "../../../App";
import { ValidUsers } from "../../data/ValidUsers";
import { StackParamList } from "../../components/navigators/StackNavigator";

interface SignInScreenNavigationProp
  extends StackScreenProps<StackParamList, "SignInScreen"> {}

function SignInScreen({ navigation }: SignInScreenNavigationProp) {
  const userData = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSignIn() {
    const alertTitle = "Invalid Fields"
    const alertMessage = "Must fill in all fields."
    const alertInvalidMessage = "Invalid email or password"

    if (email === "" || password === "") {
      Platform.OS === "web"
        ? alert(alertMessage)
        : Alert.alert(alertTitle, alertMessage);
    } else {
      let validUser = ValidUsers.find(
        (item) => item.email === email && item.password === password
      );
      if (validUser) {
        navigation.navigate("GradeScreen");
        userData?.setUser(validUser);
      } else {
        Platform.OS === "web"
          ? alert(alertInvalidMessage)
          : Alert.alert(alertTitle, alertInvalidMessage);
      }
    }
  }
  function onSignUp() {
    navigation.navigate("SignUpScreen");
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require("../../assets/signin.png")}
        />
        <View style={styles.inputContainer}>
          <Input
            label={"Email address"}
            placeholder={"name@example.com"}
            value={email}
            keyboardType="email-address"
            onChangeText={(text) => setEmail(text)}
          />
          <Input
            label={"Password"}
            placeholder={"*********"}
            isPassword
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button title={"Sign In"} onPress={onSignIn} />
          <Text style={styles.footerText}>
            Don't have an account?
            <Text style={styles.footerLink} onPress={onSignUp}>
              {" "}
              Sign Up
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

export default React.memo(SignInScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 34,
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    width: 266,
    height: 266,
    aspectRatio: 1,
  },
  inputContainer: {
    marginTop: 85,
    width: Platform.OS === "web" ? "25%" : "100%",
  },
  buttonContainer: {
    width: Platform.OS === "web" ? "25%" : "80%",
    marginTop: 55,
  },
  skip: {
    color: colors.blue,
    fontFamily: "exo-400",
    fontSize: 18,
  },
  footerText: {
    color: colors.grey,
    fontFamily: "exo-400",
    marginTop: 33,
    fontSize: 18,
    textAlign: "center",
  },
  footerLink: {
    color: colors.blue,
    fontFamily: "exo-400",
  },
});
