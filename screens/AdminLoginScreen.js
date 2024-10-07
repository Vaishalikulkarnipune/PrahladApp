import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity } from 'react-native';

const AdminLoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const adminCredentials = {
        email: 'admin@prahladapp.com',
        password: 'admin123'
    };

    const handleAdminLogin = () => {


        if (!email.trim()) {
            Alert.alert('Error', 'Email is Required');
            return;
        }

        if (!password.trim()) {
            Alert.alert('Error', 'Password is Required');
            return;
        }

        if (email === adminCredentials.email && password === adminCredentials.password) {
            Alert.alert('Success', 'Welcome Admin!');
            navigation.navigate('AdminDashboard');
        } else {
            Alert.alert('Error', 'Invalid email or password');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Admin Login</Text>

            <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
            <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry={true} />

            <TouchableOpacity style={styles.button} onPress={handleAdminLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <Text onPress={() => navigation.navigate('Login')} style={styles.link}>
                Go to User Login
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
    title: { fontSize: 24, textAlign: 'center', marginBottom: 20, fontWeight: 'bold', color: '#ff4500' },
    input: { borderWidth: 1, marginVertical: 10, paddingHorizontal: 10, borderRadius: 5, width: '100%', height: 40, borderColor: '#cccccc' },
    button: { width: '100%', height: 50, backgroundColor: '#ff4500', justifyContent: 'center', alignItems: 'center', borderRadius: 5, marginTop: 20 },
    buttonText: { color: '#ffffff', fontSize: 18, fontWeight: 'bold' },
    link: { color: 'blue', marginTop: 16, textAlign: 'center' }
})

export default AdminLoginScreen;