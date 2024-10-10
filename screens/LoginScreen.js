import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';


const LoginScreen = ({ navigation, onLogin, onAdminLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const userCredentials = {
        email: 'U',
        password: 'U'
    };

    const adminCredentials = {
        email: 'A',
        password: 'A',
    };

    const handleLogin = () => {

        if (!email.trim()) {
            Alert.alert('Error', 'Email is Required');
            return;
        }

        if (!password.trim()) {
            Alert.alert('Error', 'Password is Required');
            return;
        }

        if (email === adminCredentials.email && password === adminCredentials.password) {
            onAdminLogin();
        } else {

        if (email === userCredentials.email && password === userCredentials.password) {
            onLogin();
        } else {
            Alert.alert('Error', 'Invalid email or password');
        }
    }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
            <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>


            <Text onPress={() => navigation.navigate('Register')} style={styles.link}>
                Don't have an account? Register
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
    link: { color: 'blue', marginTop: 16, textAlign: 'center' },
})

export default LoginScreen;