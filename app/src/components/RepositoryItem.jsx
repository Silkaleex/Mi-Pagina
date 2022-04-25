import React from "react";
import { View, StyleSheet } from "react-native";
import StyledText from "./StyledText";

const RepositoryItem = (props) => (
  <View key={props.id} style={styles.container}>
    <StyledText fontSize="subheading" fontWeight="bold">
      {props.fullName}
    </StyledText>
    <StyledText>{props.description}</StyledText>
    <StyledText>{props.languajes}</StyledText>
    <StyledText>{props.stargazersCount}</StyledText>
    <StyledText>{props.forksCount}</StyledText>
    <StyledText>{props.reviewCount}</StyledText>
    <StyledText>{props.ratingAverage}</StyledText>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
});
export default RepositoryItem;
