import React from "react";
import useData from "../hooks/useData";
import useGenres from "../hooks/useGenre";

const GenreList = () => {
  const { data: genres } = useGenres();
  return (
    <ul>
      {genres.map((genre) => (
        <li>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
