import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SCREENS } from '../Constants/Screens';
import CustomBottomTabBar from '../components/CustomBottomTabBar';
import Messages from '../Screens/Dashboard/BottomTabsScreen/Messages';
import Home from '../Screens/Dashboard/BottomTabsScreen/Home';
import Booking from '../Screens/Dashboard/BottomTabsScreen/Booking';
import Profile from '../Screens/Dashboard/BottomTabsScreen/Profile';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    const icons = ["home-outline", "facebook-messenger", "calendar-outline", "account-outline"];
    return (
        <Tab.Navigator
        screenOptions={{ headerShown: false, tabBarHideOnKeyboard: true,  }}
            tabBar={(props) => <CustomBottomTabBar {...props} icons={icons} />}
            >
            <Tab.Screen name={SCREENS.HOME}
                component={Home}
                options={{
                    headerShown: false,
                    title: "Home",
                }} />
            <Tab.Screen name={SCREENS.MESSAGES} component={Messages}
                options={{
                    headerShown: false,
                    title: "Messages",
                }} />
            <Tab.Screen name={SCREENS.BOOKING} component={Booking}
                options={{
                    headerShown: false,
                    title: "Booking",
                }} />
            <Tab.Screen name={SCREENS.PROFILE} component={Profile}
                options={{
                    headerShown: false,
                    title: "Profile",
                }} />

           
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;
