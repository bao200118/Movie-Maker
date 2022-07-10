import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { ADD_MOVIE, GET_ALL_MOVIES } from "../api/movies";
import useQuery from "../hooks/useQuery";

//Style for component fixed bottom if no vertical scroll bar
function AddMovie() {
  const query = useQuery();

  const [inputs, setInputs] = useState({
    name: "",
    genre: "",
    year: "",
  });

  const [addMovie] = useMutation(ADD_MOVIE, {
    refetchQueries: [
      { query: GET_ALL_MOVIES, variables: { name: query.name } },
    ],
  });

  const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const onHandleSubmit = () => {
    addMovie({ variables: { ...inputs } });
    setInputs({
      name: "",
      genre: "",
      year: "",
    });
  };

  return (
    <div className={`addMovie`} id="add_movies_form">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onHandleSubmit();
        }}
      >
        <label>Name</label>
        <input
          type="text"
          name="name"
          required
          onChange={(event) => onHandleChange(event)}
          value={inputs.name}
        />
        <label>Genre</label>
        <input
          type="text"
          name="genre"
          required
          onChange={(event) => onHandleChange(event)}
          value={inputs.genre}
        />
        <label>Year</label>
        <input
          type="text"
          name="year"
          placeholder="(optional)"
          onChange={(event) => onHandleChange(event)}
          value={inputs.year}
        />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;
