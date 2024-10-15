import useGenres from "../hooks/useGenres";

const GenreList = () => {
  // HOOKS
  const { data } = useGenres();
  // RENDER
  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
