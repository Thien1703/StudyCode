/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
'use strict'

import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native"
import { Container } from "../../components/Container"
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Color, FontFamily, FontSize } from "../../../GlobalStyles";
import Input from "../../components/Input";
import { useCallback, useState } from "react";
import Button from "../../components/Button";
import { RowComponent } from "../../components/RowComponent";
import CheckButton from '../../contanst/checkbox';
import { AlignBottom } from "iconsax-react-native";
// import auth from '@react-native-firebase/auth';

// import { GoogleSignin } from '@react-native-google-signin/google-signin';


export default function Login({ navigation }) {
    const [userName, setUserName] = useState('');
    const [pass, setPass] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const changeUserName = (text) => setUserName(text);
    const changePass = (text) => setPass(text);
    //  Handler checkbox 
    const [check, setCheck] = useState(false);
    const handleCheck = useCallback(() => setCheck(!check), [check]);
    //
    const handlerAuth = useCallback(() => {
        if (userName === '') {
            setUsernameError('Please Enter Your Username');
        } else {
            setUsernameError('');
        }
        if (pass === '') {
            setPasswordError('Please Enter Your Password');
        } else {
            setPasswordError('');
        }
        console.log("adadadaa")
        if (userName == 'Thanhln123@gmail.com' && pass == '123456') {
            return navigation.navigate('HomeNav')
        }
    });

    const handlerSignUp = useCallback(() => navigation.navigate('SignUp'), [navigation]);
    const handlerForgot = useCallback(() => navigation.navigate('Forgot'), [navigation]);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Color.colorGhostwhite }}>
            <Container width={wp(90)}>
                {/* Logo */}
                <View style={{ alignSelf: 'center' }}>
                    <Image
                        source={require('./../../../assets/Logo.png')}
                        style={{ width: wp(55), height: hp(20), marginBottom: hp(5) }}
                    />
                </View>
                {/* Getting */}
                <Text style={styles.title}>
                    Let’s Sign In.!
                </Text>
                <Text style={styles.detail}>
                    Login to Your Account to Continue your Courses
                </Text>
                {/*  */}
                <Input show={false} label={'Your Email'} placeholder={'Username'} onChange={changeUserName} error={false} err={usernameError} value={userName} disable={false} />
                {/*  */}
                <Input show={true} label={'Password'} placeholder={'password'} onChange={changePass} error={false} styInput={{ backgroundColor: Color.colorGhostwhite, color: Color.colorDimgray_200 }} icon={Color.colorDimgray_200} err={passwordError} value={pass} />
                {/* Remember */}
                <RowComponent padding={0} width={wp(90)} style={{ justifyContent: 'space-between', marginVertical: hp(1) }}>
                    <View style={styles.ctRemember}>
                        <CheckButton borderColor={Color.globalApp} status={check} handlePress={handleCheck} />
                        <Text style={styles.Remember}>Remember Me</Text>
                    </View>
                    <Text style={styles.Remember}
                        onPress={handlerForgot}
                    >Forgot Password?</Text>
                </RowComponent>

                {/* Button */}
                <Button title="Sign In" onPress={handlerAuth} />
                {/* Or */}
                <Text style={styles.or}>Or Continue With</Text>
                <RowComponent width={wp(40)} style={{ alignSelf: 'center' }} >
                    <Pressable>
                        <Image source={require('./../../../assets/google.png')} style={{ width: wp(15), height: hp(5) }} />
                    </Pressable>
                    <View style={{ width: wp(5) }} />
                    <Image source={require('./../../../assets/apple.png')} style={{ width: wp(15), height: hp(5) }} />
                </RowComponent>
                {/* Login */}
                <Text style={styles.or}> Don’t have an Account? <Text
                    style={{ color: Color.colorMediumslateblue, textDecorationLine: 'underline' }}
                    onPress={handlerSignUp}
                >SIGN UP</Text></Text>
            </Container>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:
            'column',
        alignItems: 'center',
        paddingVertical: hp(5)
    },
    title: {
        fontFamily: FontFamily.jostSemiBold,
        fontSize: FontSize.headingH4_size,
        color: Color.colorGray_100,
        letterSpacing: 0.2,

    },
    detail: {
        fontFamily: FontFamily.mulishBold,
        fontSize: FontSize.size_mini,
        color: Color.colorDimgray_100,
        letterSpacing: 0.2,
        lineHeight: 30
    },
    or: {
        fontFamily: FontFamily.mulishExtraBold,
        fontSize: FontSize.size_mini,
        color: Color.colorGray_100,
        textAlign: 'center'
    },
    ctRemember: {
        flexDirection: 'row',
        alignItems: 'center',
        width: wp(35),
    },
    Remember: {
        fontFamily: FontFamily.mulishExtraBold,
        fontSize: FontSize.size_smi,
        color: Color.colorGray_100,
        marginLeft: wp(3)
    }
}) 