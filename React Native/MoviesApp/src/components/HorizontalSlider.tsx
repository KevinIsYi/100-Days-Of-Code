import React from 'react'
import { FlatList } from 'react-native'
import { View, Text } from 'react-native'
import { Movie } from '../interfaces/movieInterface'
import MoviePoster from './MoviePoster';

interface Props {
    title?: string;
    movies: Movie[];
}

export const HorizontalSlider = ({ title, movies }: Props) => {
    return (
        <View style={{
            height: title ? 250 : 200,
        }}>
            {
                title && (
                    <Text style={{
                        fontSize: 25,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        marginBottom: 10
                    }}>{title}</Text>
                )
            }
            <FlatList
                data={movies}
                renderItem={({ item }: any) => (
                    <MoviePoster
                        movie={item}
                        width={125}
                        height={175}
                    />
                )}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}
