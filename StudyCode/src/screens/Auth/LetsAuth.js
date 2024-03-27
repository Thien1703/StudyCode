/* eslint-disable prettier/prettier */
import React, { useCallback } from 'react';
import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Container } from '../../components/Container';
import { Color, FontFamily, FontSize } from '../../../GlobalStyles';
import { H1 } from '../../components/H1';
import { RowComponent } from '../../components/RowComponent';
import Button from '../../components/Button';

function LetsAuth({ navigation }) {

    const handlerLogin = useCallback(() => navigation.navigate('Login'), [navigation]);
    const handlerSignUp = useCallback(() => navigation.navigate('SignUp'), [navigation]);

    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', backgroundColor: Color.colorGhostwhite }}>
            <Container style={{
                alignSelf: 'center', paddingVertical: hp(2), height: hp(60), flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: Color.colorGhostwhite
            }}>
                <Text
                    style={styles.title}
                >Let’s you in</Text>
                <View>
                    <RowComponent>
                        <Image source={require('./../../../assets/google.png')} style={{ width: wp(15), height: hp(5) }} />
                        <Text
                            style={styles.txtBtn}
                        >Continue with Google</Text>
                    </RowComponent>
                    <RowComponent>
                        <Image source={require('./../../../assets/apple.png')} style={{ width: wp(15), height: hp(5) }} />
                        <Text
                            style={styles.txtBtn}
                        >Continue with Apple</Text>
                    </RowComponent>
                </View>
                {/* Or */}
                <View style={styles.signIn}>
                    <Text style={styles.or}>(OR)</Text>
                    {/* Button */}
                    <Button title="Sign In with Your Account" onPress={handlerLogin} />
                    {/*  */}
                    <Text style={styles.or}> Don’t have an Account? <Text
                        style={{ color: Color.colorMediumslateblue, textDecorationLine: 'underline' }}
                        onPress={handlerSignUp}
                    >SIGN UP</Text></Text>
                </View>
            </Container>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    title: {
        fontFamily: FontFamily.jostSemiBold,
        fontSize: FontSize.headingH4_size,
        color: Color.colorGray_100,
        letterSpacing: 0.2,
        lineHeight: 40,
        textAlign: 'center',
    },
    txtBtn: {
        fontFamily: FontFamily.mulishExtraBold,
        fontSize: FontSize.buttonMedium_size,
        color: Color.colorDimgray_100,
        letterSpacing: 0.2,
    },
    or: {
        fontFamily: FontFamily.mulishExtraBold,
        fontSize: FontSize.size_mini,
        color: Color.colorGray_100,
    },
    btn: {
        width: wp(80),
        height: hp(8),
        backgroundColor: Color.globalApp,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: hp(3),
        justifyContent: 'space-between',
        paddingHorizontal: wp(2)
    },
    signIn: {
        marginTop: hp(5),
        flexDirection: 'column',
        alignItems: 'center'
    },

});

export default LetsAuth;
