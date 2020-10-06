const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastFilm1 = prompt('Последний посмотренный фильм', '');
let rate1 = prompt('На сколько оцените его', '');

let lastFilm2 = prompt('Последний посмотренный фильм', '');
let rate2 = prompt('На сколько оцените его', '');


personalMovieDB.movies[lastFilm1] = rate1;
personalMovieDB.movies[lastFilm2] = rate2;

console.log(personalMovieDB);