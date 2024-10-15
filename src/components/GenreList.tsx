import useGenres from "../hooks/useGenres";

const GenreList = () => {
  // HOOKS
  const { genres } = useGenres();

  // RENDER
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
