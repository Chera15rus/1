const numberOfFilms = +prompt('Сколько фильмов вы посмотрели', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = promt('Один из последних фильмов, которые вы посмотрели', ''),
    b = promt('На сколько оцените его', ''),
    c = promt('Один из последних фильмов, которые вы посмотрели ', ''),
    d = promt('На сколько оцените его', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);