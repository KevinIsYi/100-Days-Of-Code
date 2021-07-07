import React from 'react';
import Carousel from 'react-native-snap-carousel';
import { View, ActivityIndicator, Dimensions, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMovies } from '../hooks/useMovies';
import MoviePoster from '../components/MoviePoster';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';
import { getImageColors } from '../helpers/getColors';
import { useContext } from 'react';
import { GradientContext } from '../context/GradientContext';
import { useEffect } from 'react';

const { width } = Dimensions.get('window');

export const HomeScreen = () => {

    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
    const { top } = useSafeAreaInsets();
    const { setMainColors } = useContext(GradientContext);

    const getPosterColors = async (index: number) => {
        const movie = nowPlaying[index];
        const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

        const [primary = 'green', secondary = 'orange'] = await getImageColors(uri);
    
        setMainColors({
            primary,
            secondary
        });
    }

    useEffect(() => {
        if (nowPlaying.length > 0) {
            getPosterColors(0);
        }
    }, [nowPlaying]);

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
        <GradientBackground>
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
                            onSnapToItem={index => getPosterColors(index)}
                        />
                    </View>
                    <HorizontalSlider title="Popular" movies={popular} />
                    <HorizontalSlider title="Top Rated" movies={topRated} />
                    <HorizontalSlider title="Upcoming" movies={upcoming} />
                </View>
            </ScrollView>
        </GradientBackground>
    )
}
