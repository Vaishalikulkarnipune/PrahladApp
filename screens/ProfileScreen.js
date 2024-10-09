import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button, ScrollView, TouchableOpacity, Image } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

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


    const [profilePic, setProfilePic] = useState(null);
    const [gender, setGender] = useState('male')

    const [isEditable, setIsEditable] = useState(false);

    const handleEditPress = () => {
        setIsEditable(!isEditable);
    };

    const handleSavePress = () => {
        setIsEditable(false)
        // save the data to backend
    }

    const pickImage = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permissionResult.granted) {
            alert('Permission to access camera roll is required');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1,1],
            quality: 1,
        });

        if (!result.canceled) {
            console.log(result.uri);
            
            setProfilePic(result.assets[0].uri)
        }
    };

    const renderProfilePicture = () => {
        if(profilePic) {
            return (
                <Image source={{uri: profilePic}}
                style={styles.profilePic}
                rounded
                />
            );
        } else {
            return (
                <Image 
                    source={
                        gender === 'male'
                        ? require('../assets/male.jpg')
                        : require('../assets/female.jpg')
                    }
                    style={styles.profilePic}

                />
            );
        }
    };

    const removeProfilePic = () => {
        setProfilePic(null)
    }


    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
            <Text style={styles.header}>Profile</Text>

            <TouchableOpacity onPress={pickImage} style={styles.avatarContainer}>
                {renderProfilePicture()}
                <Text style={styles.editText}>Edit Profile Picture</Text>
            </TouchableOpacity>

            {profilePic && (
                <Text style={styles.removePic} onPress={removeProfilePic}>Remove Profile Picture</Text>
            )}

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
    saveButton: {backgroundColor: '#4CAF50', padding: 10, borderRadius: 5, flex: 1, marginRight: 5},
    cancelButton: {backgroundColor: '#808080', padding: 10, borderRadius: 5, flex: 1, marginLeft: 5},
    buttonText: {color: '#fff', fontSize: 16, fontWeight: 'bold'},
    profilePic: {width: 100, height: 100, borderRadius: 50, borderWidth: 2, borderColor: '#ff4500', marginBottom: 10},
    editText: {color: '#ff4500', fontWeight: 'bold', textAlign: 'center'},
    avatarContainer: {alignItems: 'center', marginBottom: 20},
    removePic: {color: '#ff4500', fontWeight: 'bold', textAlign: 'center', marginTop: -10, marginBottom: 20}
})

export default ProfileScreen
