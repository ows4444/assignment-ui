import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FetchFilm } from "../store/film-slice";
function FilmById() {
  const { filmComments, films } = useSelector((state) => state.film);
  let { id } = useParams();
  const Film = films.find((x) => x.id == id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchFilm(id));
  }, []);
  return (
    <>
      <h2>{Film.name}</h2>

      <ul>
        {filmComments.length
          ? filmComments.map((comment) => {
              return (
                <li key={comment.id}>
                  <h3>{comment.user.name}</h3>
                  <p>{comment.content}</p>
                </li>
              );
            })
          : "NO Comments"}
      </ul>
    </>
  );
}

FilmById.propTypes = {};

export default FilmById;
