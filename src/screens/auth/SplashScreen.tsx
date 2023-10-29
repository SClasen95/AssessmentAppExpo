import React from "react";
import { Image, StyleSheet, Text, View, Platform } from 'react-native';
import Button from "../../components/Button";
import { colors } from "../../utils/colors";
import { StackScreenProps } from "@react-navigation/stack";
import { StackParamList } from "../../components/navigators/StackNavigator";

interface SplashScreenNavigationProp
  extends StackScreenProps<StackParamList, "SplashScreen"> {}

function SplashScreen({ navigation }: SplashScreenNavigationProp) {
  const onButtonPress = () => {
    navigation.navigate("SignInScreen");
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} resizeMode="contain" source={require("../../assets/splash.png")} />
      <Text style={styles.title}>Let's find the "A" with us</Text>
      <Text style={styles.subtitle}>
        Please Sign in to view personalized recommendations
      </Text>
      <View style={styles.buttonContainer}>
        <Button title={"Sign up"} onPress={onButtonPress} />
      </View>
      <Text style={styles.skip}>Skip</Text>
    </View>
  );
}

export default React.memo(SplashScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 44,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  image: {
    width: "100%", // Adjust image width for responsive design
    
  },
  title: {
    fontFamily:'exo-600',
    fontSize: 20,
    color: colors.darkGrey,
    marginVertical: 35,
  },
  subtitle: {
    fontFamily:'exo-500',
    fontSize: 18,
    color: colors.grey,
    textAlign: "center",
  },
  buttonContainer: {
    width: Platform.OS ==="web" ? "25%" : "80%",
    flexDirection: "row",
    marginTop: 106,
    marginBottom: 33,
  },
  skip: {
    color: colors.blue,
    fontFamily:'exo-400',
    fontSize: 18,
  },
});
