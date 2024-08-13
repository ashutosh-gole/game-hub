import genres from "../data/genres";
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
const useGenres = () => ({ data: genres, error: null, isLoading: false });

export default useGenres;