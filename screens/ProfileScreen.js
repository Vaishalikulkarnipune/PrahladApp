import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native'

const ProfileScreen = () => {

    const [userData, setUserData] = useState({
        firstName: 'Vedant',
        middleName: 'Girish',
        lastName: 'Golegaonkar',
        email: 'vedantgolegaonkar@gmail.com',
        mobileNumber: '8275312045',
        altMobileNumber: '8459323382',
        flatNo: 'Flat 101',
        fullAddress: '123 Main Street',
        area: 'Downtown',
        landmark: 'New Central Park',
        city: 'Mumbai',
        state: 'Maharashtra',
        pincode: '400001',
        anugrahit: 'Yes',
        gender: 'Male'
    });

    const [isEditable, setIsEditable] = useState(false);

    const handleEditPress = () => {
        setIsEditable(!isEditable);
    };

    const handleSavePress = () => {
        setIsEditable(false)
        // save the data to backend
    }


    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
            <Text style={styles.header}>Profile</Text>

            <View style={styles.formGroup}>
                <Text style={styles.label}>First Name:</Text>
                <TextInput style={[styles.input, isEditable && styles.inputEditable]} value={userData.firstName} onChangeText={(text) => setUserData({ ...userData, firstName: text })} editable={isEditable} />
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Middle Name:</Text>
                <TextInput style={[styles.input, isEditable && styles.inputEditable]} value={userData.middleName} onChangeText={(text) => setUserData({ ...userData, middleName: text })} editable={isEditable} />
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Last Name:</Text>
                <TextInput style={[styles.input, isEditable && styles.inputEditable]} value={userData.lastName} onChangeText={(text) => setUserData({ ...userData, lastName: text })} editable={isEditable} />
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Email:</Text>
                <TextInput style={[styles.input, isEditable && styles.inputEditable]} value={userData.email} onChangeText={(text) => setUserData({ ...userData, email: text })} editable={isEditable} />
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Mobile Number:</Text>
                <TextInput style={[styles.input, isEditable && styles.inputEditable]} value={userData.mobileNumber} keyboardType="numeric" onChangeText={(text) => setUserData({ ...userData, mobileNumber: text })} editable={isEditable} />
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Alternate Mobile Number</Text>
                <TextInput style={[styles.input, isEditable && styles.inputEditable]} value={userData.altMobileNumber} keyboardType="numeric" onChangeText={(text) => setUserData({ ...userData, altMobileNumber: text })} editable={isEditable} />
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Flat No:</Text>
                <TextInput style={[styles.input, isEditable && styles.inputEditable]} value={userData.flatNo} onChangeText={(text) => setUserData({ ...userData, flatNo: text })} editable={isEditable} />
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Full Address:</Text>
                <TextInput style={[styles.input, isEditable && styles.inputEditable]} value={userData.fullAddress} onChangeText={(text) => setUserData({ ...userData, function: text })} editable={isEditable} />
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Area:</Text>
                <TextInput style={[styles.input, isEditable && styles.inputEditable]} value={userData.area} onChangeText={(text) => setUserData({ ...userData, area: text })} editable={isEditable} />
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Landmark:</Text>
                <TextInput style={[styles.input, isEditable && styles.inputEditable]} value={userData.landmark} onChangeText={(text) => setUserData({ ...userData, landmark: text })} editable={isEditable} />
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>City:</Text>
                <TextInput style={[styles.input, isEditable && styles.inputEditable]} value={userData.city} onChangeText={(text) => setUserData({ ...userData, city: text })} editable={isEditable} />
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>State:</Text>
                <TextInput style={[styles.input, isEditable && styles.inputEditable]} value={userData.state} onChangeText={(text) => setUserData({ ...userData, state: text })} editable={isEditable} />
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Pincode:</Text>
                <TextInput style={[styles.input, isEditable && styles.inputEditable]} value={userData.pincode} keyboardType="numeric" onChangeText={(text) => setUserData({ ...userData, pincode: text })} editable={isEditable} />
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Anugrahit:</Text>
                <TextInput style={[styles.input, isEditable && styles.inputEditable]} value={userData.anugrahit} onChangeText={(text) => setUserData({ ...userData, anugrahit: text })} editable={isEditable} />
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Gender:</Text>
                <TextInput style={[styles.input, isEditable && styles.inputEditable]} value={userData.gender} onChangeText={(text) => setUserData({ ...userData, gender: text })} editable={isEditable} />
            </View>

            {isEditable ? (
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.saveButton} onPress={handleSavePress}>
                        <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.cancelButton} onPress={handleEditPress}>
                        <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <TouchableOpacity style={styles.editButton} onPress={handleEditPress}>
                        <Text style={styles.buttonText}>Edit</Text>
                    </TouchableOpacity>
            )}
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollContainer: {flexGrow: 1, paddingBottom: 20},
    container: { flex: 1, padding: 20, backgroundColor: '#fff' },
    header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center', color: '#ff4500' },
    formGroup: { marginBottom: 15 },
    label: {fontSize: 16, color: '#333', marginBottom: 5},
    input: { height: 40, borderColor: '#ccc', borderWidth: 1, borderRadius: 5, paddingLeft: 10, backgroundColor: '#f9f9f9' },
    inputEditable: {borderColor: '#FF6F00'},
    buttonContainer: {flexDirection: 'row', justifyContent: 'space-between', marginTop: 20},
    editButton: {backgroundColor: '#FF6F00', padding: 10, borderRadius: 5, alignItems: 'center'},
    saveButton: {backgroundColor: '#FF6FF0', padding: 10, borderRadius: 5, flex: 1, marginRight: 5},
    cancelButton: {backgroundColor: '#B22222', padding: 10, borderRadius: 5, flex: 1, marginLeft: 5},
    buttonText: {color: '#fff', fontSize: 16, fontWeight: 'bold'}
})

export default ProfileScreen
