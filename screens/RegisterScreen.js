import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Toast from "react-native-toast-message";

const RegisterScreen = ({ navigation, onRegister }) => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [altMobileNumber, setAltMobileNumber] = useState("");
  const [flatNo, setFlatNo] = useState("");
  const [fullAddress, setFullAddress] = useState("");
  const [area, setArea] = useState("");
  const [landmark, setLandmark] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [anugrahit, setAnugrahit] = useState("no");
  const [gender, setGender] = useState("male");

  const handleRegistration = () => {
    if (!firstName.trim()) {
      Alert.alert("Error", "FirstName is Required");
      return;
    }
    if (!lastName.trim()) {
      Alert.alert("Error", "Last Name is Required");
      return;
    }
    if (!email.trim()) {
      Alert.alert("Error", "Email is Required");
      return;
    }
    if (!password.trim()) {
      Alert.alert("Error", "Password is Required");
      return;
    }
    if (!confirmPassword.trim()) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }
    if (!mobileNumber.trim()) {
      Alert.alert("Error", "Mobile Number is Required");
      return;
    }
    if (!fullAddress.trim()) {
      Alert.alert("Error", "Full Address is Required");
      return;
    }
    if (!area.trim()) {
      Alert.alert("Error", "Area is Required");
      return;
    }
    if (!landmark.trim()) {
      Alert.alert("Error", "Landmark is Required");
      return;
    }
    if (!state.trim()) {
      Alert.alert("Error", "State is Required");
      return;
    }
    if (!pincode.trim()) {
      Alert.alert("Error", "Pincode is Required");
      return;
    }
    if (!anugrahit.trim()) {
      Alert.alert("Error", "Anugrahit field is Required");
      return;
    }
    if (!gender.trim()) {
      Alert.alert("Error", "Gender is Required");
      return;
    } 
    if (
      firstName.trim() &&
      lastName.trim() &&
      email.trim() &&
      password.trim() &&
      confirmPassword.trim() &&
      mobileNumber.trim() &&
      fullAddress.trim() &&
      area.trim() &&
      landmark.trim() &&
      city.trim() &&
      state.trim() &&
      pincode.trim()
    ) {
      onRegister(navigation);
      Toast.show({
        type: "success",
        text1: "Registration Successful",
        text2: "You have been registered successfully",
      });
    }
       else {
        Toast.show({
          type: "error",
          text1: "Registration Failed",
          text2: "Please fill in all the required fields",
        })
      }
  };

  const handleRegister = () => {
    if (
      firstName.trim() &&
      lastName.trim() &&
      email.trim() &&
      password.trim() &&
      confirmPassword.trim() &&
      mobileNumber.trim() &&
      fullAddress.trim() &&
      area.trim() &&
      landmark.trim() &&
      city.trim() &&
      state.trim() &&
      pincode.trim()
    ) {
      onRegister(navigation);
      Toast.show({
        type: "success",
        text1: "Registration Successful",
        text2: "You have been registered successfully",
      });
    }
       else {
        Toast.show({
          type: "error",
          text1: "Registration Failed",
          text2: "Please fill in all the required fields",
        })
      }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Register</Text>

      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Middle Name"
        value={middleName}
        onChangeText={setMiddleName}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        value={mobileNumber}
        onChangeText={setMobileNumber}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Alternate Mobile Number"
        value={altMobileNumber}
        onChangeText={setAltMobileNumber}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Flat No."
        value={flatNo}
        onChangeText={setFlatNo}
      />
      <TextInput
        style={styles.input}
        placeholder="Full Address"
        value={fullAddress}
        onChangeText={setFullAddress}
      />
      <TextInput
        style={styles.input}
        placeholder="Area"
        value={area}
        onChangeText={setArea}
      />
      <TextInput
        style={styles.input}
        placeholder="Landmark"
        value={landmark}
        onChangeText={setLandmark}
      />
      <TextInput
        style={styles.input}
        placeholder="City"
        value={city}
        onChangeText={setCity}
      />
      <TextInput
        style={styles.input}
        placeholder="State"
        value={state}
        onChangeText={setState}
      />
      <TextInput
        style={styles.input}
        placeholder="Pincode"
        value={pincode}
        onChangeText={setPincode}
      />
      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>Anugrahit:</Text>
        <Picker
          selectedValue={anugrahit}
          style={styles.picker}
          onValueChange={(itemValue) => setAnugrahit(itemValue)}
        >
          <Picker.Item label="Yes" value="yes" />
          <Picker.Item label="No" value="no" />
        </Picker>
      </View>

      <View style={styles.pickerContainer}>
        <Text style={styles.pickerLabel}>Gender:</Text>
        <Picker
          selectedValue={gender}
          style={styles.picker}
          onValueChange={(itemValue) => setGender(itemValue)}
        >
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
          <Picker.Item label="Other" value="other" />
        </Picker>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleRegistration}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
    color: "#ff4500",
  },
  input: {
    borderWidth: 1,
    marginVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 4,
    width: "100%",
    height: 40,
    borderColor: "#cccccc",
  },
  pickerContainer: { width: "100%", marginVertical: 10 },
  pickerLabel: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#ff4500",
  },
  picker: { width: "100%", height: 50, borderWidth: 1, borderColor: "#cccccc" },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#ff4500",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: { color: "#ffffff", fontSize: 18, fontWeight: "bold" },
});

export default RegisterScreen;
