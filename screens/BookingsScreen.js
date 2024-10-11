// This Screen is of the Admin Panel

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BookingsScreen = () => {
  return (
    <View style={StyleSheet.container}>
      <Text style={styles.text}>Your Bookings wil be listed here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: {
    fontSize: 18,
    color: "#ff4500",
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
  },
});

export default BookingsScreen;
