'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Последний посмотренный фильм', '');
        let b = prompt('На сколько оцените его', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length <= 50) {
            personalMovieDB.movies[a] = b;
            console.log('done!');
        } else {
            console.log('error!');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Посмотренно довольно мало фильмов');
    } else if (personalMovieDB.count <= 30) {
        console.log('Вы скласический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('ВЫ КИНОМАН');
    }  else {
        console.log('Произошла ошибка!');
    }
}

detectPersonalLevel();

console.log(personalMovieDB);
