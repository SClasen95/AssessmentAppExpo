import React, { useState } from "react";
import { Platform, ScrollView, StyleSheet } from "react-native";
import Header from "../../components/Header";
import { TeacherType, Teachers } from "../../data/Teachers";
import ItemsList from "../../components/ItemsList";
import { InstitutionType, Institutions } from "../../data/Institutions";

function MainScreen() {
  const [searchValue, setSearchValue] = useState("");
  const [searchedTeachers, setSearchedTeachers] = useState<TeacherType[]>(
    Teachers
  );
  const [searchedInstitutions, setSearchedInstitutions] = useState<
    InstitutionType[]
  >(Institutions);

  function onSearchPress(value: string) {
    setSearchValue(value);
    setSearchedTeachers(
      Teachers.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      )
    );
    setSearchedInstitutions(
      Institutions.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      )
    );
  }

  return (
    <ScrollView style={Platform.OS === 'web' ? styles.webView : null} contentInsetAdjustmentBehavior="automatic"
    showsVerticalScrollIndicator={false}
    >      
      <Header searchValue={searchValue} onSearchPress={onSearchPress} />
      <ItemsList
        title="Popular Teachers"
        horizontal
        items={searchedTeachers}
        isSearch={searchValue.length > 0}
      />
      <ItemsList
        title="Popular Institutions"
        horizontal={false}
        items={searchedInstitutions}
        isSearch={searchValue.length > 0}
      />
    </ScrollView>
  );
}
export default React.memo(MainScreen);

const styles = StyleSheet.create({
  webView:{
    width: '80%',
    alignSelf:'center'
  },

})