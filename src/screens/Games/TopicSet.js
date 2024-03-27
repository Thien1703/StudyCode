'use strict'

import React, { useCallback } from 'react'
import { View, StyleSheet, SafeAreaView, ImageBackground, Text, Image, Platform, Pressable, FlatList } from 'react-native'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Container } from '../../components/Container';
import { Color, FontFamily, FontSize } from '../../../GlobalStyles';
import { Clock } from 'iconsax-react-native';


export default function TopicSet({ navigation, route }) {
    const data = route.params?.data ?? [];

    const quiz = require('./../../../assets/SOLONA.png');
    const python = require('./../../../assets/SOLONA.png');
    const java = require('./../../../assets/java.png');



    const CartAsm = React.memo(({ image, title, time, level = 'low', data = [] }) => {
        return (
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
                    paddingVertical: 10,
                    paddingHorizontal: 5,
                    borderRadius: 10,
                }}
                onPress={() => handlerQuizTest(data)}
            >
                <Image source={image} style={{
                    width: wp(25),
                    height: hp(5),
                    resizeMode: 'contain'
                }}

                />
                <View
                    style={{
                        flexDirection: 'column',
                        alignItems: 'flex-start'
                    }}
                >
                    <Text style={{
                        color: Color.colorOrangered,
                        fontFamily: FontFamily.poppinsSemiBold,
                        fontSize: 13,
                        textAlign: 'center',
                        width: '100%'
                    }}>{title}</Text>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Clock color={Color.colorGray_100} size={13} />
                        <Text
                            style={{
                                fontFamily: FontFamily.mulishBold,
                                fontSize: FontSize.size_mini,
                                color: Color.colorGray_100,
                                marginLeft: 10
                            }}
                        >{time} mins</Text>
                    </View>
                </View>
                <View style={{
                    marginLeft: 12,
                    width: wp(20),
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Text style={{
                        fontSize: FontSize.size_mini,
                        color: Color.colorGray_100,
                        fontFamily: FontFamily.mulishBold,
                    }}>
                        Level:
                    </Text>
                    <Text style={{
                        marginLeft: 5,
                        fontSize: FontSize.size_mini,
                        color: level == 'low' ? 'green' : level == 'medium' ? Color.colorOrangered : 'red',
                        fontFamily: FontFamily.mulishBold,
                    }}>
                        {level}
                    </Text>
                </View>
            </Pressable>
        )
    }, []);

    const handlerQuizTest = useCallback((data) => {
        navigation.navigate('Quiz', { quizData: data });
    }, []);

    const RenderTopic = React.memo(() => {
        return (
            <FlatList
                showsVerticalScrollIndicator={false}
                style={{
                    height: hp(75)
                }}
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <CartAsm image={python} time={item?.time || 15} title={item.title} level={item?.level} data={item?.quiz || []} />
                )}
            />
        )
    }, [data])


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Color.colorGhostwhite }}>
            <Container width={wp(85)} >
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '100%',
                    justifyContent: 'space-around',
                }}>
                    <Image source={quiz} style={{
                        width: wp(15),
                        height: hp(15),
                        resizeMode: 'contain',
                    }} />
                    <Text style={
                        {
                            fontFamily: FontFamily.poppinsSemiBold,
                            fontSize: FontSize.size_3xl - 5,
                            color: Color.colorGray_100,

                        }
                    }>Tổng hợp các bài quiz test </Text>
                </View>
                <RenderTopic />
            </Container>
        </SafeAreaView>
    )
}

