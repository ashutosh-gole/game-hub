import axios from "axios"

export interface FetchResponse<T> {
    count: number;
    results: T[];
}

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "52518337ec834188af1771f05377b99e"
    }
});