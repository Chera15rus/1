const numberOfFilms = +prompt('Сколько фильмов вы посмотрели', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних фильмов, которые вы посмотрели', ''),
    b = prompt('На сколько оцените его', ''),
    c = prompt('Один из последних фильмов, которые вы посмотрели ', ''),
    d = prompt('На сколько оцените его', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;