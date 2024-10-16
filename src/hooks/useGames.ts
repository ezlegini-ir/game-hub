
import useData from "./useData";
import { Genre } from "./useGenres";

//INTERFACES
export interface Platform {
    id: number;
    name: string;
    slug: string;
}
export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[]
    metacritic: number;
  }

  
// COMPONENT FUNCTION
const useGames = (selectedGenre: Genre | null) => useData<Game>('/games', {params: {genres: selectedGenre?.id}}, [selectedGenre])

export default useGames