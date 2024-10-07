import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Login', email, password);
        navigation.navigate('Home')
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
            <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
            <Button title="Login" onPress={handleLogin} />
            <Text onPress={() => navigation.navigate('Register')} style={styles.link}>
                Don't have an account? Register
            </Text>
        </View>
    )

}


const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 15 },
    title: { fontSize: 24, textAlign: 'center', marginBottom: 24 },
    input: { borderWidth: 1, marginBottom: 12, padding: 8, borderRadius: 4 },
    link: { color: 'blue', marginTop: 16, textAlign: 'center' },
})

export default LoginScreen;