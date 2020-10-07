const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
    console.log('Посмотренно довольно мало фильмов');
} else if (personalMovieDB.count <= 30) {
    console.log('Вы скласический зритель');
} else if (personalMovieDB.count > 30) {
    console.log('ВЫ КИНОМАН');
}  else {
    console.log('Произошла ошибка!');
}

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