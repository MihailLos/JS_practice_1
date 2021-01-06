"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const firstFilmName = prompt("Один из последних просмотренных фильмов?", ""),
      firstFilmRate = +prompt("На сколько оцените его?", ""), 
      secondFilmName = prompt("Один из последних просмотренных фильмов?", ""), 
      secondFilmRate = +prompt("На сколько оцените его?", "");

personalMovieDB.movies[firstFilmName] = firstFilmRate;
personalMovieDB.movies[secondFilmName] = secondFilmRate;

console.log(personalMovieDB);