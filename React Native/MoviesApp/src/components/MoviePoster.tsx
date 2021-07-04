import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Movie } from '../interfaces/movieInterface';

interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}

const MoviePoster = ({ movie, height = 350, width = 200 }: Props) => {

    const { poster_path } = movie;

    const uri = `https://image.tmdb.org/t/p/w500${poster_path}`;


    return (
        <View style={{
            height,
            width,
            marginHorizontal: 5
        }}>
            <View style={styles.imageContainer}>
                <Image
                    source={{
                        uri
                    }}
                    style={
                        styles.image
                    }
                />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 15,
    },
    imageContainer: {
        borderRadius: 15,
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
    }
});

export default MoviePoster
