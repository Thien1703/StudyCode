'use strict';
import React from 'react';
import { View } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Color } from '../../GlobalStyles';

export const Container = (props) => (
    <View
        style={[
            {
                width: props.width ?? wp(95),
                height: props.height ?? 'auto',
                backgroundColor: props.backgroundColor ?? Color.colorGhostwhite,
                alignSelf: 'center',
            },
            props.style,
        ]}
    >
        {props.children}
    </View>
);
