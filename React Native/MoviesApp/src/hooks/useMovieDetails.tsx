import { useEffect } from "react";
import { useState } from "react"
import movieDB from "../api/movieDB";
import { Cast, CreditsResponse } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/movieInterface';

interface MovieDetails {
    isLoading: boolean;
    fullMovieName?: MovieFull;
    cast: Cast[];
}

export const useMovieDetails = (movieId: number) => {
    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        fullMovieName: undefined,
        cast: []
    });

    const getMovieDetails = async () => {
        const movieDetailsPromise = movieDB.get<MovieFull>(`/${movieId}`);
        const castPromise = movieDB.get<CreditsResponse>(`/${movieId}/credits`);

        const [movieDetailsResponse, castPromiseResponse] = await Promise.all([
            movieDetailsPromise,
            castPromise
        ]);

        setState({
            isLoading: false,
            fullMovieName: movieDetailsResponse.data,
            cast: castPromiseResponse.data.cast
        });
    };

    useEffect(() => {
        getMovieDetails();
    }, []);

    return {
        ...state
    }
}
