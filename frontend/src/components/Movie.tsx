/* eslint-disable array-callback-return */
import { useMutation } from "@apollo/client";
import React from "react";
import { DELETE_MOVIE, GET_ALL_MOVIES } from "../api/movies";
import useQuery from "../hooks/useQuery";

interface MovieProps {
  _id: string;
  name: string;
  genre: string;
  year: number;
}

function Movie(props: MovieProps) {
  const query = useQuery();

  const [deleteMovie] = useMutation(DELETE_MOVIE, {
    refetchQueries: [
      { query: GET_ALL_MOVIES, variables: { name: query.name } },
    ],
  });

  const onHandleDelete = () => {
    deleteMovie({ variables: { id: props._id } });
  };

  return (
    <div className="card">
      <div className="container">
        <button onClick={onHandleDelete} className="delete_button">
          x
        </button>
        <img
          src="https://rb.gy/mzzafz"
          alt="John Wick"
          width="100%"
          height="250px"
        />
        <h2>{props.name}</h2>
        <h4>
          {props.genre} - {props.year}
        </h4>
      </div>
    </div>
  );
}

export default Movie;
