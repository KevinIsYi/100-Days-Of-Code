import React from 'react';
import { View, Text } from 'react-native';
import currencyFormatter from 'currency-formatter';
import Icon from 'react-native-vector-icons/Ionicons';
import { Cast } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/movieInterface';
import { CastItem } from './CastItem';
import { FlatList } from 'react-native-gesture-handler';

interface Props {
    movieFull: MovieFull;
    cast: Cast[];
}

export const MovieDetails = ({ movieFull, cast }: Props) => {

    const { vote_average, genres, overview, budget } = movieFull;

    return (
        <>
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon
                        name="star-outline"
                        color="grey"
                        size={20}
                    />
                    <Text> {vote_average}</Text>
                    <Text style={{ marginLeft: 10 }}>
                        - {genres.map(({ name }) => name).join(', ')}
                    </Text>
                </View>
                <Text
                    style={{
                        marginTop: 10,
                        fontWeight: 'bold',
                        fontSize: 22.5
                    }}
                >
                    History
                </Text>
                <Text style={{ fontSize: 16 }}>{overview}</Text>
                <Text
                    style={{
                        marginTop: 10,
                        fontWeight: 'bold',
                        fontSize: 22.5
                    }}
                >
                    Budget
                </Text>
                <Text style={{ fontSize: 16 }}>{currencyFormatter.format(budget, { code: 'USD' })}</Text>
                <View style={{ marginTop: 10, marginBottom: 50, }}>
                    <Text
                        style={{
                            marginTop: 10,
                            fontWeight: 'bold',
                            fontSize: 22.5,
                        }}
                    >
                        Actors
                    </Text>
                    <FlatList
                        horizontal
                        data={cast}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => <CastItem actor={item} />}
                        showsHorizontalScrollIndicator={false}
                        style={{marginTop: 10, height: 70}}
                    />
                </View>
            </View>
        </>
    )
}
