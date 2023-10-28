import React from "react";
import { View, Text, Image, StyleSheet, Platform } from "react-native";
import { colors } from "../utils/colors";

interface StarRatingProps {
  totalReviews: number;
  averageScore: number;
}

function StarRating({ totalReviews, averageScore }: StarRatingProps) {
  // Calculate the number of full, half, and empty stars
  const fullStars = Math.floor(averageScore);
  const hasHalfStar = averageScore - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  // Create an array of stars to display
  const stars : ("full" | "half" | "empty")[] = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push("full");
  }
  if (hasHalfStar) {
    stars.push("half");
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push("empty");
  }

  return (
    <View style={styles.container}>
      <View style={styles.starContainer}>
        {stars.map((type, index) => (
          <Image key={index} source={starImages[type]} style={Platform.OS === 'web' ? styles.starWeb : styles.star} />
        ))}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {averageScore} ({totalReviews})
        </Text>
      </View>
    </View>
  );
}

const starImages = {
  full: require("./../assets/fullStar.png"),
  half: require("./../assets/halfStar.png"),
  empty: require("./../assets/emptyStar.png"),
};
const styles = StyleSheet.create({
  container: {  
    flexDirection: "row",
    alignItems: "center",
    marginTop:6
  },
  starContainer: {
    flexDirection: "row",
  },
  star: {
    width: 8,
    height: 8,
    marginRight: 2,
  },
  starWeb: {
    width: 14,
    height: 14,
    marginRight: 2,
  },
  textContainer: {
    marginLeft: 5,
    flexDirection: "row",
  },
  text: {
    fontSize: Platform.OS === 'web' ? 14 : 8,
    color: colors.darkGrey,
  },
});

export default React.memo(StarRating);
