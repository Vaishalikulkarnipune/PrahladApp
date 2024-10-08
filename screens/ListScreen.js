import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ListScreen = () => {
    return (
        <View style={StyleSheet.container}>
            <Text style={styles.text}>All bookings of the year will be listed here</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20  },
    text: { fontSize: 18, color: '#ff4500', paddingTop: 15, paddingLeft: 20, paddingRight: 20, paddingBottom: 15 },
})

export default ListScreen
