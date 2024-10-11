// This Screen is of the User Panel

import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useBooking } from "../context/BookingContext";

const BookingScreen = () => {
  const { bookings } = useBooking();

  return (
    <View style={styles.container}>
      {bookings.length > 0 ? (
        <FlatList
          data={bookings}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.bookingCard}>
              <View style={styles.bookingDetails}>
                <Text style={styles.bookingLabel}>Date: </Text>
                <Text style={styles.bookingText}>{item.date}</Text>
              </View>

              <View style={styles.bookingDetails}>
                <Text style={styles.bookingLabel}>Status: </Text>
                <Text
                  style={[
                    styles.bookingText,
                    item.status === "Confirmed"
                      ? styles.statusConfirmed
                      : styles.statusCancelled,
                  ]}
                >
                  {item.status}
                </Text>
              </View>

              <View style={styles.bookingDetails}>
                <Text style={styles.bookingLabel}>MahaPrasad: </Text>
                <Text
                  style={[
                    styles.bookingText,
                    item.MahaPrasadStatus === "Available"
                      ? styles.statusConfirmed
                      : styles.statusCancelled,
                  ]}
                >
                  {item.MahaPrasadStatus}
                </Text>
              </View>
            </View>
          )}
        />
      ) : (
        <Text style={styles.noBookingsText}>No Bookings Found</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f4f4f4" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 16, color: "#333" },
  bookingCard: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
    borderLeftWidth: 5,
    borderColor: "#ff4500",
  },
  bookingDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: " 5",
  },
  bookingLabel: { fontWeight: "bold", color: "#333" },
  bookingText: { color: "#555" },
  statusConfirmed: { color: "#4CAF50", fontWeight: "bold" },
  statusCancelled: { color: "#F44336", fontWeight: "bold" },
  noBookingsText: {
    fontSize: 10,
    textAlign: "center",
    marginTop: 20,
    color: "#999",
  },
});

export default BookingScreen;
