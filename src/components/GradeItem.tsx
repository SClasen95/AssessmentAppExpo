import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import { colors } from "../utils/colors";

interface GradeItemProps {
  title: string | undefined;
  imageSource?: ImageSourcePropType | undefined;
  isSelected?: boolean;
  imgReq?: boolean;
}

function GradeItem({ title, imageSource, isSelected, imgReq }: GradeItemProps) {
  return (
    <View
      style={[
        styles.container,
        isSelected
          ? { backgroundColor: colors.blue, borderColor: colors.blue }
          : null,
      ]}
    >
      {imgReq && imageSource !== undefined  && (
        <Image source={imageSource} style={styles.image} />
      )}
      <Text style={[styles.title, isSelected ? { color: "white" } : null]}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    borderWidth: 1,
    borderRadius: 11,
    borderColor: colors.itemColor,
    backgroundColor: colors.itemColor,
    margin: 8,
    justifyContent: "space-around",
  },
  image: {
    width: 21,
    height: 21,
  },
  title: {
    fontSize: 16,
    fontFamily:'exo-500',
    color:colors.darkGrey,
  },
});

export default React.memo(GradeItem);
