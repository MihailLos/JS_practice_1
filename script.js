"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов!");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert("Вы классический зритель.");
    } else if (personalMovieDB.count > 30) {
        alert("Вы киноман!");
    } else {
        alert("Ошибка ввода данных");
    }
}

detectPersonalLevel();

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const filmName = prompt("Один из последних просмотренных фильмов?", ""),
              filmRate = +prompt("На сколько оцените его?", "");
        
        if (filmName != null && filmRate != null && filmName != "" && filmRate != "" && filmName.length <= 50) {
            alert("Данные успешно записаны.");
            personalMovieDB.movies[filmName] = filmRate;
        } else {
            alert("Ошибка ввода данных!");
            i--;
        }
    }
}

rememberMyFilms();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        
        personalMovieDB.genres.push(genre);
    }
}

writeYourGenres();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();