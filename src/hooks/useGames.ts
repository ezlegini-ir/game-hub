
import useData from "./useData";

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
const useGames = () => useData<Game>('/games')

export default useGames