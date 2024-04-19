/* eslint-disable prettier/prettier */
import React, { useCallback } from "react";
import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Color, FontFamily, FontSize } from "../../../GlobalStyles";
import { Container } from "../../components/Container";
import { RowComponent } from "../../components/RowComponent";
import {
    EmptyWallet,
    User,
    Notification,
    SecurityUser,
    LanguageSquare,
    MessageQuestion,
    Logout,
    ArrowRight2,
} from "iconsax-react-native";
import Button from "../../components/Button";

const settingsData = [
    { icon: <User size="17" color={Color.colorGray_100} />, text: "Edit Profile", onPress: "EditProfile" },
    { icon: <EmptyWallet size="17" color={Color.colorGray_100} />, text: "Payment Option" },
    { icon: <Notification size="17" color={Color.colorGray_100} />, text: "Notifications", onPress: "Notification" },
    { icon: <SecurityUser size="17" color={Color.colorGray_100} />, text: "Security", onPress: "Security" },
    { icon: <LanguageSquare size="17" color={Color.colorGray_100} />, text: "Language", onPress: "EditProfile" },
    { icon: <MessageQuestion size="17" color={Color.colorGray_100} />, text: "Help Center", onPress: "Help" },
    { icon: <Logout size="17" color={Color.colorGray_100} />, text: "LogOut" }
];

const ProfileSetting = ({ navigation }) => {
    const navigateTo = useCallback((screen) => {
        navigation.navigate(screen);
    }, [navigation]);

    const Header = React.memo(() => {
        return (
            <View style={styles.header}>
                <View style={styles.avatarContainer}>
                    <Image source={require('./../../../assets/avatar.png')} style={styles.avatar} resizeMode="cover" />
                    <Image source={require('./../../../assets/SQUARE.png')} style={styles.squareIcon} resizeMode="cover" />
                </View>

                <Text style={[styles.fullName,
                {
                    fontSize: 12
                }
                ]}>FoLcjP4s9rmZfyuRnjb...</Text>
            </View>
        )
    });

    return (
        <SafeAreaView style={styles.container}>
            <Container style={styles.container}>
                <View style={styles.contentContainer}>
                    {/* Header */}
                    <Header />
                    {/* Settings */}
                    <View style={styles.settingsContainer}>
                        {settingsData.map((item, index) => (
                            <SettingsItem key={index} icon={item.icon} text={item.text} onPress={() => navigateTo(item.onPress)} />
                        ))}
                        <Button style={{
                            width: wp(80)
                        }} title = {"Log out"} onPress={() => navigation.navigate('Login')}/>

                    </View>
                </View>
            </Container>
        </SafeAreaView>
    );
};

const SettingsItem = ({ icon, text, onPress }) => (
    <Pressable onPress={onPress}>
        <RowComponent style={styles.item}>
            <View style={styles.itemContent}>
                {icon}
                <Text style={[styles.tIcon, { marginLeft: 15 }]}>{text}</Text>
            </View>

            <ArrowRight2 size="17" color={Color.colorGray_100} variant="Outline" />
        </RowComponent>
    </Pressable>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.colorGhostwhite,
        justifyContent: 'center',
    },
    contentContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    header: {
        alignItems: 'center',
        marginBottom: hp(2),
    },
    avatarContainer: {
        position: 'relative',
    },
    avatar: {
        width: wp(25),
        height: wp(25),
        borderRadius: 50,
        backgroundColor: Color.colorGray_100,
        borderWidth: 5,
        borderColor: Color.globalApp,
    },
    squareIcon: {
        position: 'absolute',
        width: wp(10),
        height: wp(10),
        bottom: 0,
        right: -20,
    },
    fullName: {
        fontFamily: FontFamily.jostSemiBold,
        fontSize: FontSize.headingH4_size,
        color: Color.colorGray_100,
        letterSpacing: 0.2,
        lineHeight: 30,
        marginVertical: hp(1),
    },
    settingsContainer: {
        width: wp(85),
        backgroundColor: Color.colorInput,
        padding: 10,
        borderRadius: 20,
    },
    item: {
        justifyContent: 'space-between',
    },
    itemContent: {
        flexDirection: 'row',
        alignItems: 'center',
        color: Color.colorGray_100,
    },
    tIcon: {
        fontFamily: FontFamily.mulishBold,
        fontSize: FontSize.size_mini,
        color: Color.colorGray_100,
    }
});

export default ProfileSetting;
