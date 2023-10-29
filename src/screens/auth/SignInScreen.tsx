import React, { useContext, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Platform,
  ScrollView,
  UIManager,
  LayoutAnimation,
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

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

function SignInScreen({ navigation }: SignInScreenNavigationProp) {
  const userData = useContext(UserContext);
  const [invalidFields, setInvalidFields] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [isSignUp, setIsSignUp] = useState(true);

  function onSignUp() {
    // Store the user input in the context
    const newInvalidFields: string[] = [];

    if (userName === "") {
      newInvalidFields.push("userName");
    }
    if (email === "") {
      newInvalidFields.push("email");
    }
    if (password === "") {
      newInvalidFields.push("password");
    }

    setInvalidFields(newInvalidFields);

    if (newInvalidFields.length === 0) {
      const validUser = {
        userName: userName,
        email: email,
        password: password,
      };
      userData?.setUser(validUser);
      navigation.navigate("GradeScreen");
    }
  }

  function onSignIn() {
    const newInvalidFields: string[] = [];

    let validUser = ValidUsers.find(
      (item) => item.email === email && item.password === password
    );

    if (validUser) {
      navigation.navigate("GradeScreen");
      userData?.setUser(validUser);
    } else {
      if (!ValidUsers.some((user) => user.email === email)) {
        newInvalidFields.push("email");
      }

      if (!ValidUsers.some((user) => user.password === password)) {
        newInvalidFields.push("password");
      }
    }
    setInvalidFields(newInvalidFields);
  }

  function togleView() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); // Add animation configuration
    setIsSignUp(!isSignUp);
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image
          style={isSignUp ? styles.signUpImage : styles.signInImage}
          resizeMode="contain"
          source={
            isSignUp
              ? require("../../assets/signup.png")
              : require("../../assets/signin.png")
          }
        />
        <View style={[styles.inputContainer, { marginTop: isSignUp ? 0 : 86 }]}>
          {isSignUp && (
            <Input
              isError={invalidFields.includes("userName")}
              label={"Name"}
              placeholder={"Your name"}
              onChangeText={(text) => setUserName(text)}
            />
          )}
          <Input
            isError={invalidFields.includes("email")}
            label={"Email address"}
            placeholder={"name@example.com"}
            value={email}
            keyboardType="email-address"
            onChangeText={(text) => setEmail(text)}
          />
          <Input
            isError={invalidFields.includes("password")}
            label={"Password"}
            placeholder={"*********"}
            isPassword
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <View style={styles.buttonContainer}>
          {isSignUp ? (
            <>
              <Button title={"Sign Up"} onPress={onSignUp} />
              <Text style={styles.footerText}>
                You have an account?
                <Text style={styles.footerLink} onPress={togleView}>
                  {" "}
                  Sign In
                </Text>
              </Text>
            </>
          ) : (
            <>
              <Button title={"Sign In"} onPress={onSignIn} />
              <Text style={styles.footerText}>
                Don't have an account?
                <Text style={styles.footerLink} onPress={togleView}>
                  {" "}
                  Sign Up
                </Text>
              </Text>
            </>
          )}
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
    justifyContent: "flex-end",
  },
  signInImage: {
    width: 266,
    height: 266,
    aspectRatio: 1,
  },
  signUpImage: {
    width: 353,
    height: 235,
  },
  inputContainer: {
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
