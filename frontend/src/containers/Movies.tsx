/* eslint-disable react-hooks/exhaustive-deps */
import useQuery from "../hooks/useQuery";
import React, { useEffect } from "react";
import { GET_ALL_MOVIES } from "../api/movies";
import Movie from "../components/Movie";
import { useLazyQuery } from "@apollo/client";

function Movies() {
  const query = useQuery();

  const [, { loading, error, data, refetch }] = useLazyQuery(GET_ALL_MOVIES, {
    variables: { name: query.name },
  });

  useEffect(() => {
    refetch({ name: query.name });
  }, [query]);

  if (loading) {
    return <h2>We are loading your movies</h2>;
  }

  if (error) {
    return <h2>{error.message}</h2>;
  }

  if (data?.movies?.length === 0) {
    return <h2>Please add movies</h2>;
  }

  return (
    <div className="movies">
      {data?.movies?.map((movie: any) => {
        return (
          <Movie
            key={movie._id}
            _id={movie._id}
            name={movie.name}
            genre={movie.genre}
            year={movie.year}
          />
        );
      })}
    </div>
  );
}

export default Movies;
