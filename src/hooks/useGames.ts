import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

//INTERFACES
export interface Game {
    id: number;
    name: string;
    background_image: string;
  }

  interface FetchGameResponse {
    count: number;
    results: Game[];
  }
  
// COMPONENT FUNCTION
const useGames = () => {
//HOOKS
    const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGameResponse>("/games", {signal: controller.signal})
      .then((res) => setGames(res.data.results))
      .catch((err) =>{
        if (err instanceof CanceledError) return;
        setError(err.message)});

    return () => controller.abort();
  }, []);

  // RETURN
  return {games, error}
}

export default useGames