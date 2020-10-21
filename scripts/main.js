'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели', '');
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели', '');
        } 
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Посмотренно довольно мало фильмов');
        } else if (personalMovieDB.count <= 30) {
            console.log('Вы скласический зритель');
        } else if (personalMovieDB.count > 30) {
            console.log('ВЫ КИНОМАН');
        }  else {
            console.log('Произошла ошибка!');
        }
    },
    showMyDB: function(hidden) {
        if(!hidden) {
            console.log(personalMovieDB);
            console.log('вывелся');
        }
    },
    toggleVisibleMyBD: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGanres: function() {
        for(let i = 1; i <= 3; i++) {
            let ganre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (ganre == null || ganre == '') {
                console.log('Введены некоректные денные') 
                i--;
            } else {
                personalMovieDB.genres[i - 1] = ganre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`${i+1}-й любимый жанр - это ${item.toUpperCase()}`);
        });
    }
};

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.showMyDB(personalMovieDB.privat);
// personalMovieDB.toggleVisibleMyBD();
// personalMovieDB.writeYourGanres();

