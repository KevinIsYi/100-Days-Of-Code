import React from 'react';
import Carousel from 'react-native-snap-carousel';
import { View, ActivityIndicator, Dimensions, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMovies } from '../hooks/useMovies';
import MoviePoster from '../components/MoviePoster';
import { HorizontalSlider } from '../components/HorizontalSlider';

const { width } = Dimensions.get('window');

export const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
    const { top } = useSafeAreaInsets();

    if (isLoading) {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignContent: 'center',
            }}>
                <ActivityIndicator color="red" size={35} />
            </View>
        );
    }

    return (
        <ScrollView>
            <View style={{
                marginTop: top + 10,
                marginHorizontal: 10,
            }}>
                <View style={{
                    height: 360,
                }}>
                    <Carousel
                        data={nowPlaying}
                        renderItem={({ item }: any) => <MoviePoster movie={item} />}
                        sliderWidth={width}
                        itemWidth={200}
                        inactiveSlideOpacity={0.9}
                    />
                </View>
                <HorizontalSlider title="Popular" movies={popular} />
                <HorizontalSlider title="Top Rated" movies={topRated} />
                <HorizontalSlider title="Upcoming" movies={upcoming} />       
            </View>
        </ScrollView>
    )
}
