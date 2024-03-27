import React from 'react';
import { Image, Text, View } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as Progress from 'react-native-progress';
import { Color } from './GlobalStyles';

const logo = require('./assets/MVM.png');
const Splash = () => (
    <>
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'center',
                backgroundColor: Color.colorGhostwhite,
            }}>
            <View style={{ width: wp(80), height: hp(49), alignSelf: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <Image source={logo} resizeMode="contain" style={{ width: wp(75), height: hp(30) }} />
                <Progress.Circle
                    size={40}
                    indeterminate={true}
                    color={Color.globalApp}
                    borderWidth={3}
                    style={{ alignSelf: 'center', marginTop: 20 }}
                />
            </View>
        </View>
    </>
);

export default Splash;
