/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Image, Text, View } from "react-native";
import LottieView from 'lottie-react-native';
import { Color } from "../../../GlobalStyles";
const LoadingView = () => (
    <View style={{
        flex: 1, justifyContent: 'center',
        alignItems: 'center', flexDirection: 'column',
        backgroundColor: Color.colorGhostwhite
    }}>
        <LottieView source={require('./../../../assets/loading.json')} autoPlay loop
            style={{ width: 250, height: 250 }}
        />
        <Text style={{ fontSize: 20, color: '#fff', fontWeight: 'bold', marginTop: 10 }}>Loading...</Text>
    </View>
);
export default LoadingView;
