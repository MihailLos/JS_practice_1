"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов!");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert("Вы классический зритель.");
} else if (personalMovieDB.count > 30) {
    alert("Вы киноман!");
} else {
    alert("Ошибка ввода данных");
}

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

console.log(personalMovieDB);