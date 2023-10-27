import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { colors } from "../utils/colors";

interface TeacherProps {
  imageSource: any;
  title: string;
  subtitle: string;
  color?: string;
}

function Teacher({ imageSource, title, subtitle, color }: TeacherProps) {
  return (
    <View style={styles.container}>
      <View style={[styles.imageContainer, { backgroundColor: color }]}>
        <Image source={imageSource} style={styles.image} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    backgroundColor: colors.white,
    padding: 8,
    width: 126,
    height: 176,
    marginHorizontal: 8,
    marginVertical:10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  imageContainer: {
    borderRadius: 10,
    width: "100%",
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  title: {
    fontSize: 16,
    fontFamily:'exo-600',
    marginTop: 6,
    color: colors.darkGrey,
  },
  subtitle: {
    fontSize: 12,
    color: colors.grey,
  },
});

export default React.memo(Teacher);
