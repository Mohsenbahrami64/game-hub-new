import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";
import { CanceledError } from "axios";


export interface Genre {
    id: number;
    name: string;



}
interface FetchGenresResponse {
    count: number;
    results: Genre[]
}

const useGenres = () => {
    const [genres, setGenre] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true)
        apiClient
            .get<FetchGenresResponse>("/games", { signal: controller.signal })
            .then((res) => {
                setGenre(res.data.results);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return null;
                setError(err.message)
            }).finally(() =>
                setLoading(false)
            )
        return () => {
            controller.abort();
        };
    }, []);

    return { genres, error, isLoading }
}

export default useGenres;