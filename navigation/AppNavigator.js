import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import BookingScreen from "../screens/BookingScreen";
import ListScreen from "../screens/ListScreen";
import NotificationScreen from "../screens/NotificationScreen";
import ProfileScreen from "../screens/ProfileScreen";
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SlotBookingScreen from "../screens/SlotBookingScreen";
import AdminLoginScreen from "../screens/AdminLoginScreen";
import { Ionicons } from '@expo/vector-icons';
import { View, ActivityIndicator } from "react-native";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigator = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleLogin = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setIsLoggedIn(true)
        }, 2000)
    };

    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#ff4500" />
            </View>
        );
    }


    return (
        <NavigationContainer>
            {isLoggedIn ? (
                <Stack.Navigator>
                    <Stack.Screen name="Main" options={{ headerShown: false }}>
                        {() => (
                            <Tab.Navigator initialRoute="Home"
                                screenOptions={({ route }) => ({
                                    tabBarIcon: ({ color, size }) => {
                                        let iconName;
                                        if (route.name === 'Home') {
                                            iconName = 'home'
                                        }
                                        else if (route.name === 'Bookings') {
                                            iconName = 'calendar'
                                        }
                                        else if (route.name === 'List') {
                                            iconName = 'list'
                                        }
                                        else if (route.name === 'Notifications') {
                                            iconName = 'notifications'
                                        }
                                        else if (route.name === 'Profile') {
                                            iconName = 'person'
                                        }
                                        return <Ionicons name={iconName} size={size} color={color} />
                                    },
                                    tabBarActiveTintColor: '#ff4500',
                                    tabBarInactiveTintColor: 'gray',
                                })}
                            >
                                <Tab.Screen name="Home" component={HomeScreen} />
                                <Tab.Screen name="Bookings" component={BookingScreen} />
                                <Tab.Screen name="List" component={ListScreen} />
                                <Tab.Screen name="Notifications" component={NotificationScreen} />
                                <Tab.Screen name="Profile" component={ProfileScreen} />
                            </Tab.Navigator>
                        )}
                    </Stack.Screen>


                    <Stack.Screen name="SlotBooking" component={SlotBookingScreen} options={{ title: 'Book a Slot' }} />
                    <Stack.Screen name="Adminlogin" component={AdminLoginScreen} options={{title: 'Admin Panel'}} />
                    <Stack.Screen name="Register" component={RegisterScreen} options={{title: 'Registration'}} />


                </Stack.Navigator>
            ) : (
                <Stack.Navigator>
                    <Stack.Screen name="Login">
                        {(props) => <LoginScreen {...props} onLogin={handleLogin} />}
                    </Stack.Screen>
                    <Stack.Screen name="Adminlogin" component={AdminLoginScreen} options={{title: 'Admin Panel'}} />
                    <Stack.Screen name="Register" component={RegisterScreen} options={{title: 'Registration'}} />

                </Stack.Navigator>
            )}
        </NavigationContainer>
    )
}

export default AppNavigator;