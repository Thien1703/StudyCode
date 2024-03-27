/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import React, { useCallback } from 'react';
import { View, Text, Pressable, SafeAreaView, Platform } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Color, FontFamily, FontSize } from '../../GlobalStyles.js';
import HomeScreen from '../screens/Home/Home.js';
import { ArrowLeft, Home, Book, Message, User, Game } from 'iconsax-react-native';
import CourseNav from './Course.nav.js';
import SettingNav from './Setting.nav';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MyCourse from '../screens/Course/MyCourse.js';
import HightScores from '../screens/Games/HightScros.js';
import GameNav from './Game.nav.js';


const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: Color.colorGhostwhite,
    },
};

export const CustomHeader = React.memo(({ navigation, title }) => {
    const goBack = useCallback(() => {
        navigation.goBack();
    }, [navigation]);

    return (
        <View style={{
            flexDirection: 'row', alignItems: 'center', padding: 10
        }}>
            <Pressable onPress={goBack}>
                <ArrowLeft style={{ marginRight: 20 }} variant="Outline" color={Color.colorDimgray_100} />
            </Pressable>
            <Text style={{ fontFamily: FontFamily.jostSemiBold, fontSize: FontSize.size_2xl, color: Color.colorGray_100 }}>{title}</Text>
        </View>
    );
});

const HomeNav = React.memo(() => {
    const IconTab = ({ focused, children, name }) => (
        <View style={{ alignItems: 'center', justifyContent: 'space-between' }}>
            {children}
            <Text style={{ color: focused ? Color.globalApp : Color.colorGray_100, fontWeight: '700', marginTop: 5 }}>{name}</Text>
        </View>
    );
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={({ navigation, route }) => ({
                header: () => (
                    <SafeAreaView style={{ backgroundColor: Color.colorGhostwhite }}>
                        <View style={{ backgroundColor: Color.colorGhostwhite }}>
                            <CustomHeader navigation={navigation} title={route.name} />
                        </View>
                    </SafeAreaView>
                ),
                gestureEnabled: false,
                tabBarLabel: '',
                tabBarStyle: {
                    ...(Platform.OS === 'ios' && { paddingTop: 20, backgroundColor: Color.colorGhostwhite, }),
                    backgroundColor: Color.colorGhostwhite
                },
            })}


        >
            <Tab.Screen
                name="CourseNav"
                component={CourseNav}
                options={({ route }) => {
                    return {
                        tabBarIcon: ({ focused }) => (
                            <IconTab focused={focused} name="Home">
                                <Home size={22} variant="Bold" color={focused ? Color.globalApp : Color.colorDimgray_100} />
                            </IconTab>
                        ),
                        headerShown: false,
                        tabBarStyle: {
                            ...(Platform.OS === 'ios' && {
                                paddingTop: 20,
                                backgroundColor: Color.colorGhostwhite
                            }),
                            display: getTabBarVisible(route),
                        }
                    };
                }}
            />
            <Tab.Screen
                name="My Courses"
                component={MyCourse}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <IconTab focused={focused} name="My Courses">
                            <Book size={22} variant="Bold" color={focused ? Color.globalApp : Color.colorDimgray_100} />
                        </IconTab>
                    ),
                }}
            />
            <Tab.Screen
                name="Honor"
                component={HightScores}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <IconTab focused={focused} name="Honor">
                            <Message size={22} variant="Bold" color={focused ? Color.globalApp : Color.colorDimgray_100} />
                        </IconTab>
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="GameNav"
                component={GameNav}
                options={({ route }) => {
                    return {
                        tabBarIcon: ({ focused }) => (
                            <IconTab focused={focused} name="Game">
                                <Game size={22} variant="Bold" color={focused ? Color.globalApp : Color.colorDimgray_100} />
                            </IconTab>

                        ),
                        headerShown: false,
                        tabBarStyle: {
                            ...(Platform.OS === 'ios' && { paddingTop: 20 }),
                            backgroundColor: Color.colorGhostwhite,
                            display: getTabBarVisible(route),
                        }
                    };
                }}
            />
            <Tab.Screen
                name="Profile"
                component={SettingNav}
                options={({ route }) => {
                    return {
                        tabBarIcon: ({ focused }) => (
                            <IconTab focused={focused} name="Profile">
                                <User size={22} variant="Bold" color={focused ? Color.globalApp : Color.colorDimgray_100} />
                            </IconTab>
                        ),
                        headerShown: false,
                        tabBarStyle: {
                            ...(Platform.OS === 'ios' && { paddingTop: 20 }),
                            backgroundColor: Color.colorGhostwhite,
                            display: getTabBarVisible(route),
                        }
                    };
                }}
            />



        </Tab.Navigator>
    );
});

function getTabBarVisible(route) {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === 'EditProfile' || routeName === 'Notification' || routeName === 'Security' || routeName === 'Help' || routeName === 'DetailCourse' || routeName === 'LessonCourse' || routeName === 'ShowAnswer' || routeName === 'Quiz' ||
        routeName === 'CartificateCourse'
    ) {
        return 'none';
    }

    return 'flex';
}

export default HomeNav;
