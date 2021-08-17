import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { useState } from 'react';
import { Animated, Dimensions, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { View, Text, ImageSourcePropType, SafeAreaView } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import { HeaderTitle } from '../components/HeaderTitle';
import { useAnimation } from '../hooks/useAnimation';

const { width: screenWidth } = Dimensions.get('window');

interface Props extends StackScreenProps<any, any> { };

interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType
}

const items: Slide[] = [
    {
        title: 'Titulo 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../assets/slide-1.png')
    },
    {
        title: 'Titulo 2',
        desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../assets/slide-2.png')
    },
    {
        title: 'Titulo 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../assets/slide-3.png')
    },
]

export const SlidesScreen = ({ navigation }: Props) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const { opacity, fadeIn } = useAnimation();

    const renderItem = (item: Slide) => {

        const { desc, img, title } = item;

        return (
            <View style={{
                flex: 1,
                backgroundColor: 'white',
                borderRadius: 5,
                padding: 40,
                justifyContent: 'center'
            }}>
                <Image
                    source={img}
                    style={{
                        width: 350,
                        height: 400,
                        resizeMode: 'center'
                    }}
                />
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{desc}</Text>
            </View>
        )
    }

    return (
        <SafeAreaView
            style={{
                flex: 1,
                paddingTop: 50
            }}
        >
            <Carousel
                data={items}
                renderItem={({ item }) => renderItem(item)}
                sliderWidth={screenWidth}
                itemWidth={screenWidth}
                layout="default"
                onSnapToItem={(index) => {
                    setActiveIndex(index);

                    if (index === items.length - 1) {
                        fadeIn();
                        setIsVisible(true);
                    }
                }}
            />
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 20,
                    alignItems: 'center'

                }}
            >
                <Pagination
                    dotsLength={items.length}
                    activeDotIndex={activeIndex}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: '#5856D6'
                    }}
                />
                {
                    isVisible && (
                        <Animated.View
                            style={{
                                opacity
                            }}
                        >
                            <TouchableOpacity style={{
                                alignItems: 'center',
                                backgroundColor: '#5856D6',
                                borderRadius: 10,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                paddingHorizontal: 10,
                                paddingVertical: 5,
                            }}
                                activeOpacity={0.8}
                                onPress={() => {
                                    navigation.navigate('HomeScreen')
                                }}
                            >
                                <Text style={{
                                    fontSize: 20,
                                    color: 'white'
                                }}>
                                    Enter
                                </Text>
                                <Icon
                                    name="chevron-forward-outline"
                                    color="white"
                                    size={30}
                                />
                            </TouchableOpacity>
                        </Animated.View>
                    )
                }
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#5856D6'
    },
    subTitle: {
        fontSize: 16
    }
});