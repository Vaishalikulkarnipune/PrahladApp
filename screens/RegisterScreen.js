import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


const RegisterScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = () => {
        if (password === confirmPassword) {
            console.log('Register', email, password);
            navigation.navigate('Login')
        } else {
            alert('Passwords do not match')
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
            <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
            <TextInput style={styles.input} placeholder="Confirm Password" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />
            <Button title="Register" onPress={handleRegister} />
                <Text onPress={() => navigation.navigate('Login')} style={styles.link}>
                    Already have an account? Login
                </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 16 },
    title: { fontSize: 24, textAlign: 'center', marginBottom: 24 },
    input: { borderWidth: 1, marginBottom: 12, padding: 8, borderRadius: 4 },
    link: { color: 'blue', marginTop: 16, textAlign: 'center' },
})

export default RegisterScreen;