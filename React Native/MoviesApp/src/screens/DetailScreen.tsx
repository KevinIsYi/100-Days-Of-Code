import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Image, StyleSheet, Dimensions, ScrollView, Text } from 'react-native';
import { RootStackParams } from '../navigator/Navigation';

const { height } = Dimensions.get('screen');

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { };

export const DetailScreen = ({ navigation, route }: Props) => {

    const { params } = route;
    const { poster_path, original_title, title } = params;
    const uri = `https://image.tmdb.org/t/p/w500${poster_path}`;

    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri }}
                    style={styles.posterImage}
                />
            </View>
            <View style={styles.marginContainer}>
                <Text style={styles.subtitle}>{original_title}</Text>
                <Text style={styles.title} >{title}</Text>
            </View>
            <View style={styles.marginContainer}>
                <Icon
                    name="star-outline"
                    color="grey"
                    size={20}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        overflow: 'hidden',
        width: '100%',
        height: height * 0.7,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
    },
    posterImage: {
        flex: 1,
    },
    marginContainer: {
        marginTop: 10,
        marginHorizontal: 20
    },
    subtitle: {
        fontSize: 16,
        opacity: 0.8
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});
