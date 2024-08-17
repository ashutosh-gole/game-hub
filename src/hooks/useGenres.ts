import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";
// import useData from "./useData";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

// load genres using API
// const useGenres = () => useData<Genre>("/genres");
// or
// load genres using static data
// const useGenres = () => ({ data: genres, error: null, isLoading: false });
// or
// load genres using react query
const useGenres = () => useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.get<FetchResponse<Genre>>("/genres").then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: { count: genres.length, results: genres }
});

export default useGenres;