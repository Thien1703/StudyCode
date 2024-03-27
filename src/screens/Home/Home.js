/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
'use strict';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { View, Text, Button, SafeAreaView, StyleSheet, Pressable, Image, TextInput, ScrollView, Platform, FlatList } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { Color, FontFamily, FontSize } from '../../../GlobalStyles';
import { ArrowRight2, Notification, SearchNormal1, SaveAdd } from 'iconsax-react-native';
import { RowComponent } from '../../components/RowComponent';
import { Container } from '../../components/Container';
import { Tag } from '../../contanst/tag';
import { DataCourse, dataImage } from '../../data/data';
import SlideShow from '../../contanst/Slide';
import LoadingView from '../Auth/LoadingScreen';


// Test Data
const listCategory = [
    'All',
    'NATIVE',
    'RUST',
    'SOLANA',
    'Python',
    'Javascript',
    'React Native',
]


function Home({ navigation }) {
    //  Test Data
    const listCourse = useMemo(() => DataCourse, []);
    const [loading, setLoading] = useState(true);
    setTimeout(() => {
        return (setLoading(false))
    }, 3000);
    const [List, setListCourse] = useState([])
    const [searchCourse, setFilteredCourses] = useState([]);
    const [trackCourse, setCourse] = useState('All');
    const [images] = useState(() => dataImage);

    // Call 
    useEffect(() => {
        setListCourse(listCourse);

    }, [listCourse])
    // Header 
    const Header = React.memo(({ name }) => {
        return (
            <RowComponent style={styles.header}>
                <View style={{ width: wp(60), flexDirection: 'row', alignItems: 'center' }} >
                    <Image source={require('./../../../assets/iconPhantom.png')
                    }
                        style={{
                            width: 30,
                            height: 30,
                            borderRadius: 10,
                            marginRight: 10
                        }}
                    />
                    <Text
                        style={styles.textTag}>
                        FoLcjP4s9rmZfyuRnjb....
                    </Text>
                </View>
                <Pressable>
                    <Image source={require("./../../../assets/NOTIFICATIONS.png")} resizeMode='contain' />
                </Pressable>
            </RowComponent>
        );
    }, []);
    // Search
    const Search = () => {
        return (
            <RowComponent style={styles.search}  >
                <SearchNormal1 size={FontSize.buttonMedium_size} color={Color.primaryWhite} />
                <TextInput
                    style={styles.input}
                    placeholder="Search for Courses"
                    placeholderTextColor={Color.colorDimgray_200}
                    onChangeText={(text) => {
                        const filteredCourses = listCourse.filter((item) => item.title.toLowerCase().includes(text.toLowerCase()));
                        setFilteredCourses(filteredCourses);
                    }}
                />
                <Image source={require('./../../../assets/FILTER.png')} />
            </RowComponent>
        )
    }
    // Card Course
    const CardCourse = ({ url, title, category, onPress }) => (
        < Pressable style={styles.card} onPress={onPress}>
            {/* Card Image */}
            < View >
                <Image
                    style={{
                        width: wp(55),
                        height: hp(15)
                    }}
                    resizeMode='cover'
                    source={url} />
            </View >
            <View View style={styles.cardDetail} >
                <RowComponent style={{
                    padding: 0,
                    width: wp(50),
                    justifyContent: 'space-between'
                }}>
                    <Text
                        style={styles.textCategory}
                    >{category}</Text>
                    <SaveAdd size={FontSize.buttonMedium_size} color={Color.globalApp} />
                </RowComponent>
                <Text
                    style={styles.courseTitle}
                >{title}</Text>
            </View>
        </Pressable >
    )
    // Create Category 
    const CategoryLS = React.memo(() => {
        return (
            <FlatList
                bounces={false}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={listCategory}
                key={(item) => item}
                renderItem={({ item, index }) => <Tag title={item}
                    onPress={() => handleCategoryPress(item)}
                    status={trackCourse === item ? true : false}
                />}
            />
        )

    }, [listCategory]);
    //  Create List Course
    const Course = React.memo(() => {
        return (
            <FlatList
                bounces={false}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={List}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <CardCourse title={item.title} url={{ uri: item.image }} category={item.category} onPress={() => handleCoursePress(item)} />}
                key={(item) => item.id.toString()


                }
            />
        )
    }, List)
    //
    const handleCategoryPress = (category) => {
        setCourse(category);
        if (category === 'All') {
            setListCourse(listCourse);
        } else {
            const filteredCourses = listCourse.filter(course => course.category === category);
            setListCourse(filteredCourses);
        }
    };
    // handleCoursePress
    const handleCoursePress = useCallback((course) => {
        navigation.navigate('DetailCourse', { course });
    }, []);

    // Loading view 



    return (
        loading > 0 ? <LoadingView /> :
            <ScrollView style={[styles.home]}>
                <Container style={styles.container}>
                    <Header name={'Jony'} />
                    <Search />
                    <View>
                        <RowComponent style={{ justifyContent: 'space-between' }} width={wp(90)}>
                            <Text style={
                                {
                                    color: Color.colorGray_100,
                                    fontFamily: FontFamily.jostSemiBold,
                                    fontSize: FontSize.size_lg
                                }
                            } >Popular Courses</Text>
                            <Pressable style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{
                                    color: Color.globalApp,
                                    fontFamily: FontFamily.mulishExtraBold,
                                    fontSize: FontSize.size_mid
                                }}>See All</Text>
                                <ArrowRight2 size={FontSize.size_lg} color={Color.globalApp} />
                            </Pressable>

                        </RowComponent>

                        <CategoryLS />
                        {
                            searchCourse && searchCourse.length > 0 ?
                                <FlatList
                                    bounces={false}
                                    showsHorizontalScrollIndicator={false}
                                    horizontal
                                    data={List}
                                    keyExtractor={(item) => item.id.toString()}
                                    renderItem={({ item }) => <CardCourse title={item.title} url={{ uri: item.image }} category={item.category}
                                    />}
                                    key={(item) => item.id.toString()
                                    }
                                />
                                : <Course />
                        }
                        <Text style={
                            {
                                color: Color.colorGray_100,
                                fontFamily: FontFamily.jostSemiBold,
                                fontSize: FontSize.size_lg,
                                marginTop: 10
                            }
                        } >EVENTS</Text>
                        {/* Category */}
                        <SlideShow dataImage={images} />

                    </View>
                </Container >
            </ ScrollView>
    );
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        width: wp(100),
        backgroundColor: Color.colorGhostwhite
    },
    container: {
        width: wp(90),
        alignSelf: 'center',
        ...(Platform.OS === 'ios' && { paddingTop: 20 }),
        backgroundColor: Color.colorGhostwhite
    },
    header: {

        justifyContent: 'space-between',
        width: wp(90)
    },
    titHeader: {
        fontFamily: FontFamily.jostSemiBold,
        fontSize: FontSize.headingH4_size,
        color: '#202244',
    },
    titDetail: {
        fontFamily: FontFamily.mulishBold,
        fontSize: FontSize.size_smi,
        color: Color.colorDimgray_100,
    },
    input: {
        width: wp(65),
        height: hp(8),
        borderRadius: 12,
        color: Color.colorDimgray_200,
        fontFamily: FontFamily.mulishBold,
    },
    search: {
        width: wp(90),
        height: hp(8),
        padding: hp(2),
        backgroundColor: Color.colorInput,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    tag: {
        maxWidth: wp(30),
        height: hp(5),
        backgroundColor: Color.globalApp,
        borderRadius: 15
    },
    textTag: {
        fontFamily: FontFamily.mulishBold,
        fontSize: FontSize.size_smi,
        color: Color.primaryWhite,
        alignSelf: 'center',
        lineHeight: hp(5)
    },
    textCategory: {
        fontFamily: FontFamily.mulishBold,
        fontSize: FontSize.size_smi,
        color: Color.colorOrangered,
        marginTop: 10
    },
    courseTitle: {
        fontFamily: FontFamily.jostSemiBold,
        fontSize: FontSize.buttonMedium_size,
        color: Color.colorGray_100,
    },
    card: {
        width: wp(55),
        height: hp(24),
        borderColor: '#0000003b',
        borderWidth: 1,
        borderRadius: 20,
        overflow: 'hidden',
        marginTop: 20,
        marginRight: 20
    },
    cardDetail: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10,

    },

});

export default Home;
