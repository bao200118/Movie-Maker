/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useQuery from "../hooks/useQuery";

interface Props {
  data: any;
  setData: any;
}

function Header(props: Props) {
  const query = useQuery();
  const [searchString, setSearchString] = useState("");

  const [, setSearchParams] = useSearchParams();

  const onHandleSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const param = { ...query, name: searchString };

    setSearchParams(param);
  };

  return (
    <div className="topnav">
      <a className="logo" href="/">
        Movie Maker
      </a>
      <div className="search-container">
        <form onSubmit={(e) => onHandleSubmitSearch(e)}>
          <HashLink smooth to="#add_movies_form">
            Add Movies
          </HashLink>
          <input
            type="text"
            placeholder="Search.."
            name="search"
            onChange={(e) => setSearchString(e.target.value)}
          />
          <button type="submit">
            <i style={{ color: "black" }} className="fas fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Header;
