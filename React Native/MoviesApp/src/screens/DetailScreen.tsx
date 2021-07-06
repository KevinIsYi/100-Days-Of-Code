import React from 'react';
import { View, Image, StyleSheet, Dimensions, ScrollView, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/Navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';

const { height } = Dimensions.get('screen');

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { };

export const DetailScreen = ({ route, navigation }: Props) => {

    const { params } = route;
    const { id, poster_path, original_title, title } = params;
    const { isLoading, cast, fullMovieName } = useMovieDetails(id);
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
            {
                isLoading ? (
                    <ActivityIndicator size={30} color="grey" style={{ marginTop: 20 }} />

                ) : (
                    <MovieDetails
                        movieFull={fullMovieName!}
                        cast={cast}
                    />
                )
            }
            <View style={styles.backButton}>
                <TouchableOpacity
                    onPress={() => navigation.pop()}
                >
                    <Icon
                        color="white"
                        size={50}
                        style={styles.backButton}
                        name="arrow-back-outline"
                    />
                </TouchableOpacity>
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
    },
    backButton: {
        position: 'absolute',
        elevation: 999,
        top: 10,
        left: 10,
        zIndex: 999
    }
});
