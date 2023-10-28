import React from "react";
import { View, Text, Image, StyleSheet, Platform } from "react-native";
import { colors } from "../utils/colors";
import StarRating from "./StarRating";

interface InstitutionProps {
  imageSource: any;
  title: string;
  avgRating: number;
  subtitle: string;
  description: string;
  color?: string;
  totalReviews: number;
}

function Institution({
  imageSource,
  title,
  avgRating,
  subtitle,
  description,
  color,
  totalReviews,
}: InstitutionProps) {
  return (
    <View
      style={Platform.OS === "web" ? styles.containerWeb : styles.container}
    >
      <View style={[styles.imageContainer, { backgroundColor: color }]}>
        <Image source={imageSource} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <StarRating totalReviews={totalReviews} averageScore={avgRating} />
        <Text style={styles.subtitle}>{subtitle}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  containerWeb: {
    flexDirection: "row",
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "45%",
    margin:10
  },
  imageContainer: {
    borderRadius: 10,
    width: "100%",
    flex: 1,
  },
  image: {
    aspectRatio: 1,
    borderRadius: 8,
  },
  detailsContainer: {
    flex: 2,
    paddingLeft: 16,
  },
  title: {
    fontSize: 20,
    fontFamily: "exo-600",
    color: colors.darkGrey,
  },
  subtitle: {
    fontSize: 12,
    color: colors.grey,
    marginTop: 8,
    fontFamily: "exo-600",
  },
  description: {
    fontSize: 12,
    fontWeight: "300",
    color: colors.darkGrey,
  },
});

export default React.memo(Institution);
