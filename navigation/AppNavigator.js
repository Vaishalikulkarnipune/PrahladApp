import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import BookingScreen from "../screens/BookingScreen";
import ListScreen from "../screens/ListScreen";
import NotificationScreen from "../screens/NotificationScreen";
import ProfileScreen from "../screens/ProfileScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import SlotBookingScreen from "../screens/SlotBookingScreen";
import { Ionicons } from "@expo/vector-icons";
import { View, ActivityIndicator } from "react-native";
import Toast from "react-native-toast-message";
import AdminDashboard from "../screens/AdminDashboard";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [bookings, setBookings] = useState([]);


  const handleUserLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsLoggedIn(true);
    }, 500);
  };

  const handleAdminLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsAdminLoggedIn(true);
    }, 500);
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#ff4500" />
      </View>
    );
  }

  const addBooking = (slot) => {
    setBookings([...bookings, slot]);
  };



  const handleLogout = () => {
    setIsLoggedIn(false); // Reset login state
    setIsAdminLoggedIn(false); // Reset admin login if necessary
  };

  return (
    <>
      <NavigationContainer>
        {isLoggedIn ? (
          <Stack.Navigator>
            <Stack.Screen name="Main" options={{ headerShown: false }}>
              {() => (
                <Tab.Navigator
                  initialRoute="Home"
                  screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                      let iconName;
                      if (route.name === "Home") {
                        iconName = "home";
                      } else if (route.name === "My Bookings") {
                        iconName = "calendar";
                      } else if (route.name === "List") {
                        iconName = "list";
                      } else if (route.name === "Notifications") {
                        iconName = "notifications";
                      } else if (route.name === "Profile") {
                        iconName = "person";
                      }
                      return (
                        <Ionicons name={iconName} size={size} color={color} />
                      );
                    },
                    tabBarActiveTintColor: "#ff4500",
                    tabBarInactiveTintColor: "gray",
                  })}
                >
                  <Tab.Screen name="Home" component={HomeScreen} />
                  <Tab.Screen name="My Bookings">
                    {(props) => (
                      <BookingScreen {...props} bookings={bookings} />
                    )}
                  </Tab.Screen>
                  <Tab.Screen name="List" component={ListScreen} />
                  <Tab.Screen
                    name="Notifications"
                    component={NotificationScreen}
                  />
                  <Tab.Screen name="Profile">
                    {(props) => (
                      <ProfileScreen {...props} onLogout={handleLogout} />
                    )}
                  </Tab.Screen>
                </Tab.Navigator>
              )}
            </Stack.Screen>

            <Stack.Screen name="SlotBooking">
              {(props) => (
                <SlotBookingScreen {...props} addBooking={addBooking} />
              )}
            </Stack.Screen>
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{ title: "Registration" }}
            />

            <Stack.Screen
              name="Adminlogin"
              component={AdminDashboard}
              options={{ title: "Admin Panel" }}
            />
          </Stack.Navigator>
        ) : isAdminLoggedIn ? (
          <Stack.Navigator>
            <Stack.Screen
              name="AdminDashboard"
              component={AdminDashboard}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator>
            <Stack.Screen name="Login">
              {(props) => (
                <LoginScreen
                  {...props}
                  onLogin={handleUserLogin}
                  onAdminLogin={handleAdminLogin}
                />
              )}
            </Stack.Screen>
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{ title: "Registration" }}
            />

            <Stack.Screen name="AdminLogin">
              {(props) => <AdminDashboard {...props} />}
            </Stack.Screen>

            <Stack.Screen
              name="AdminDashboard"
              component={AdminDashboard}
              options={{ headerShown: false }}
            />
            <Tab.Screen name="Home" component={HomeScreen} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
      <Toast />
    </>
  );
};

export default AppNavigator;
