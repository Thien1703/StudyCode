import React from 'react';
import { View, Text, Image, StyleSheet, Platform, Pressable } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Color, FontFamily, FontSize } from '../../../GlobalStyles';


const ResuftTest = ({ total = 10, score = 0, coins = 10, showAswer, handlerHome }) => {
    return (
        <View style={styles.container}>
            <View style={{
                backgroundColor: Color.primaryWhite,
                width: wp(95),
                borderRadius: 20,
                paddingVertical: 20
            }}>
                <Text style={[styles.title, { fontSize: 30, color: Color.colorOrangered, marginVertical: 10 }]}>Quiz Result</Text>
                <View style={styles.content}>
                    <Image style={styles.champion} source={require('./../../../assets/Champion.png')} />
                    <Text style={[styles.answer, { fontSize: 22, marginVertical: 20 }]}>Congratulations!</Text>
                    <Text style={[styles.answer, { fontSize: 18, textAlign: 'center', width: '80%' }]}>
                        Congratulations on completing the test ^_^
                    </Text>
                    <Text style={[styles.title, { fontSize: 18, fontFamily: FontFamily.mulishExtraBold, width: '80%', textAlign: 'center', marginVertical: 15 }]}>
                        YOUR SCORE
                    </Text>
                    <View style={styles.row}>
                        <Text style={[styles.score, { color: Color.globalApp }]}>{score}</Text>
                        <Text style={[styles.score, {
                            color: Color.colorGhostwhite
                        }]}> / {total}</Text>
                    </View>
                    <Text style={[styles.answer, { fontSize: 20, marginTop: 10 }]}>Receive coins</Text>
                    <View style={[styles.row, { marginTop: 20 }]}>
                        <Text style={styles.coinAmount}>{coins * score * 0.01}</Text>
                        <Image style={styles.coinImage} resizeMode='contain' source={require('./../../../assets/Coin.jpeg')} />
                    </View>
                </View>
                {/* Handler */}
                <View style={styles.ctnBtn}>
                    <Pressable style={styles.btnContai} onPress={showAswer}>
                        <Text style={styles.answer}>Show Answer</Text>
                    </Pressable>
                    <Pressable style={[styles.btnContai, { backgroundColor: Color.globalApp }]} onPress={handlerHome}>
                        <Text style={styles.answer}>Home</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '113%',
        backgroundColor: '#131212c8',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        width: '100%',
        alignItems: 'center',
    },
    champion: {
        width: wp(30),
        height: hp(15),
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        color: '#3C3A36',
        fontSize: FontSize.headingH4_size,
        fontFamily: FontFamily.mulishBold,
        textAlign: 'center',
        marginBottom: 10,
    },
    answer: {
        color: Color.colorGraySilver,
        fontSize: FontSize.buttonMedium_size,
        fontFamily: FontFamily.mulishBold,
        textAlign: 'center',
    },
    score: {
        fontSize: 50,
        fontFamily: FontFamily.jostBold,
        color: Color.colorGray_100,
    },
    coinAmount: {
        fontSize: 20,
        fontFamily: FontFamily.mulishBold,
        marginRight: 10,
    },
    coinImage: {
        width: wp(10),
        height: hp(4),
    },
    btnContai: {
        marginTop: hp(3),
        width: wp(43),
        height: hp(8),
        backgroundColor: Color.colorOrangered,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ctnBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: wp(90), alignSelf: 'center' },
});

export default ResuftTest;
