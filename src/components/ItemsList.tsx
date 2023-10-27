import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { colors } from "../utils/colors";
import Teacher from "./Teacher";
import Institution from "./Institution";
import { TouchableOpacity } from "react-native-gesture-handler";
import Filter from "./Filter";
import { TeacherType } from "./../data/Teachers";
import { InstitutionType } from "./../data/Institutions";
import { Subjects } from "../data/Subjects";
import { Locations } from "../data/Locations";

interface ItemsListProps {
  title: string;
  horizontal?: boolean;
  items: TeacherType[] | InstitutionType[];
  isSearch: boolean;
}

function ItemsList({ title, horizontal, items, isSearch }: ItemsListProps) {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(
    "All Subjects"
  );
  const [selectedLocation, setSelectedLocation] = useState<string | null>(
    "All Locations"
  );

  const subjects = ["All Subjects", ...Object.values(Subjects)];
  const locations = ["All Locations", ...Object.values(Locations)];

  const [filteredItems, setFilteredItems] = useState<
    TeacherType[] | InstitutionType[]
  >(items);
  useEffect(() => {
    if (isSearch) {
      setIsFilterOpen(false);
      setSelectedSubject("All Subjects");
    }
    setFilteredItems(
      items.filter(
        (item) =>
          item.subtitle === selectedSubject ||
          selectedSubject === "All Subjects"
      )
    );
  }, [selectedSubject, items, isSearch]);

  useEffect(() => {
    if (isSearch) {
      setIsFilterOpen(false);
      setSelectedLocation("All Locations");
    }
    setFilteredItems(
      items.filter(
        (item) =>
          item.location === selectedLocation ||
          selectedLocation === "All Locations"
      )
    );
  }, [selectedLocation, items, isSearch]);

  function renderInstitutionItem({
    item,
    index,
  }: {
    item: InstitutionType;
    index: number;
  }) {
    return (
      <Institution
        key={index}
        title={item.title}
        imageSource={item?.image}
        subtitle={item?.subtitle}
        color={item?.color}
        description={item?.description}
        avgRating={item?.avgRating}
        totalReviews={item?.totalReviews}
      />
    );
  }

  function renderTeacherItem({ item }: { item: TeacherType }) {
    return (
      <Teacher
        title={item?.title}
        imageSource={item?.image}
        subtitle={item?.subtitle}
        color={item?.color}
      />
    );
  }

  function onFilterPress() {
    setIsFilterOpen(!isFilterOpen);
    if (isFilterOpen) {
      setFilteredItems(items);
      setSelectedSubject("All Subjects");
      setSelectedLocation("All Locations");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {!isSearch && (
          <TouchableOpacity onPress={onFilterPress}>
            <Image
              source={
                isFilterOpen
                  ? require("../assets/openFilter.png")
                  : require("../assets/listFilter.png")
              }
            />
          </TouchableOpacity>
        )}
      </View>
      {isFilterOpen && (
        <>
          <Filter
            title="Area"
            filters={locations}
            onSelect={setSelectedLocation}
            selected={selectedLocation}
          />
          {horizontal && (
            <Filter
              title="Subject"
              filters={subjects}
              onSelect={setSelectedSubject}
              selected={selectedSubject}
            />
          )}
        </>
      )}

      <View style={horizontal ? styles.horizontalList : styles.verticalList}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={horizontal}
          scrollEnabled={horizontal}
          data={filteredItems}
          renderItem={horizontal ? renderTeacherItem : renderInstitutionItem}
          keyExtractor={(item, index) => String(index)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
    marginRight: 53,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.darkGrey,
  },
  horizontalList: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  verticalList: {},
  itemContainer: {
    marginBottom: 16,
    width: 120,
    alignItems: "center",
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  itemTitle: {
    marginTop: 8,
    fontSize: 14,
    color: colors.darkGrey,
  },
});

export default React.memo(ItemsList);