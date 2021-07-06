import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { Movie, MovieDBNowPlaying } from "../interfaces/movieInterface";

interface MoviesState {
    nowPlaying: Movie[];
    popular: Movie[];
    topRated: Movie[];
    upcoming: Movie[];
};

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [moviesState, setMoviesState] = useState<MoviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: [],
    });

    const getMovies = async () => {
        const nowPlayingPromess = movieDB.get<MovieDBNowPlaying>('/now_playing');
        const popularPromess = movieDB.get<MovieDBNowPlaying>('/popular');
        const topRatedPromess = movieDB.get<MovieDBNowPlaying>('/top_rated');
        const upcomingPromess = movieDB.get<MovieDBNowPlaying>('/upcoming');

        const resp = await Promise.all([
            nowPlayingPromess,
            popularPromess,
            topRatedPromess,
            upcomingPromess
        ]);

        setMoviesState({
            nowPlaying: resp[0].data.results,
            popular: resp[1].data.results,
            topRated: resp[2].data.results,
            upcoming: resp[3].data.results,
        });

        setIsLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, []);

    return {
        ...moviesState,
        isLoading
    }
}