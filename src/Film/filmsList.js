import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FetchFilms } from "../store/film-slice";
function FilmList() {
  const { films } = useSelector((state) => state.film);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchFilms());
  }, []);
  return (
    <>
      <h2>Film List</h2>
      <ul>
        {films.map((x) => {
          return (
            <li key={x.id}>
              <Link to={`/film/${x.id}`}>{x.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

FilmList.propTypes = {};

export default FilmList;
