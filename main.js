let numberOfFilms;


function start() {
    let numberOfFilms = +prompt('Сколько фильмов вы посмотрели', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {

        alert("Введите число");
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели', '');

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
    for (let i = 0; i < 1; i++) {
        const a = prompt('Один из последних фильмов, которые вы посмотрели', ''),
            b = prompt('На сколько оцените его', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {

            personalMovieDB.movies[a] = b;
            console.log('done');

        } else {
            console.log('error')
            i--;
            alert('Что-то пошло не так, нажмите ОК для продолжения')
        }


    }

}
rememberMyFilms();

function showMyDB(hidden) {

    if (!hidden) {
        console.log(personalMovieDB);
    } else {
        console.log('sosi');
    }

}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genres = prompt(`Ваш любимый жанр ${i}`);
        personalMovieDB.genres[i - 1] = genres;

    }

}
writeYourGenres();