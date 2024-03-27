'use strict'

import React, { useCallback } from 'react'
import { View, StyleSheet, SafeAreaView, ImageBackground, Text, Image, Platform, Pressable } from 'react-native'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Container } from '../../components/Container';
import { Color, FontFamily, FontSize } from '../../../GlobalStyles';
import { Clock } from 'iconsax-react-native';
import { dataQuiz } from '../../data/data';


export default function SelectGames({ navigation }) {
    const quiz = require('./../../../assets/C2Rust.png');
    const python = require('./../../../assets/C3sol.png');
    const java = require('./../../../assets/java.png');


    const CardSelect = React.memo(({ image, title, onPress }) => (
        <Pressable
            style={{
                backgroundColor: Color.colorInput,
                elevation: 5,
                marginBottom: 30,
                ...(Platform.OS !== 'android' && {
                    shadowColor: Color.primaryBlack,
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.4,
                    shadowRadius: 2,
                }),
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 20,
                paddingHorizontal: 10,
                borderRadius: 20,
                zIndex: 99999
            }}
            onPress={onPress}
        >
            <Image source={image} style={{
                width: wp(25),
                height: hp(12),
                resizeMode: 'contain'
            }}

            />
            <Text style={{
                color: Color.colorGray_100,
                fontFamily: FontFamily.poppinsSemiBold,
                fontSize: 22,
                textAlign: 'center',
                marginTop: 10,
                marginLeft: 20
            }}>{title}</Text>
        </Pressable>
    ), []);

    const handlerSelect = useCallback(() => {
        return navigation.navigate('TopicSet', {
            data: dataQuiz
        })
    })


    return (
        <SafeAreaView style={{
            flex: 1, backgroundColor: Color.colorGhostwhite,
        }}>
            <ImageBackground source={require('./../../../assets/MainC1.png')}
                style={{
                    width: wp(100),
                    height: hp(100),
                    position: 'absolute',
                    top: 0
                }}
            />
            <Container
                width={wp(85)}
                height={hp(60)}
                style={{
                    zIndex: 1,
                    backgroundColor: 'transparent',
                    marginTop: hp(40)
                }}
            >
                <Pressable>
                    <Image source={quiz} style={{
                        width: wp(85),
                        height: hp(15),
                        borderRadius: 20
                    }}
                        resizeMode='cover'
                    />
                </Pressable>
                <Pressable
                    onPress={handlerSelect}
                >

                    <Image source={python} style={{
                        width: wp(85),
                        height: hp(15),
                        borderRadius: 20,
                        marginTop: 20
                    }}
                        resizeMode='cover' />
                </Pressable>
                {/* <CardSelect image={quiz} title={'RUST'}
                    onPress={() => ''}
                />
                <CardSelect image={python} title={'SOLANA'}
                    onPress={handlerSelect}
                /> */}

            </Container>

        </SafeAreaView>
    )
}

