import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ naviagtion }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Prahlad Upasana</Text>
            <Button title="Book a SLot" onPress={() => naviagtion.navigate('SlotBooking')} />
                <Text style={styles.text}></Text>
            <Button title="Profile" onPress={() => naviagtion.navigate('Profile')} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 15 },
    title: { fontSize: 24, textAlign: 'center', marginBottom: 24 },
    text: {marginTop: 8, marginBottom: 8}
})

export default HomeScreen;