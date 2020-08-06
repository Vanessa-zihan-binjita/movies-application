$(window).load(function () {
    $('#loading').hide();
});

/**
 * es6 modules and imports
 */
import sayHello from './hello';

sayHello('World');


/**
 * require style imports
 */
const {getMovie, getMovies, postMovie, patchMovie, deleteMovie} = require('./api.js');
import {movieKey} from './keys';


function refreshMovie() {
    getMovies().then((movies) => {
        console.log('Here are all the movies:');
        $('#movieList').html('')
        movies.forEach(({title, rating, id},idx) => {
            $.get(`http://www.omdbapi.com/?apikey=${movieKey()}&t=${title}`).done(function (data) {
                let moviePoster = data.Poster
                $('#movieList').append(
                    `<div class="card" style="width: 18rem;">
        <img src="${moviePoster}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${title}</h5>
    <p class="card-text" hidden>id#${id}</p>
    <p class="card-text">Rating: ${rating}</p>
    <a href="#" class="btn btn-primary edit" data-id="${id}">Edit</a>
    <a href="#" class="btn btn-primary delete" data-id="${id}">Delete</a>
    </div>
    </div>`
                )
                if(idx === movies.length-1){
                    $('.edit').click(function () {
                        let id = $(this).attr('data-id')
                        getMovie(id).then((movie) => {
                            $('#ratingID2').val(movie.rating);
                            $("#changeMovieName").val(movie.title);
                            $("#editID").val(movie.id);
                        })
                    })
                    $('.delete').click(function (e) {
                        e.preventDefault()
                        let id = $(this).attr('data-id')
                        deleteMovie(id).then((movie) => {
                            refreshMovie();
                        })
                    })
                }
            });
        })
    });
}

refreshMovie();

$("#btn1").click(function () {
    let NewMovie = {};
    NewMovie.title = $("#movieName").val();
    NewMovie.rating = $('#ratingID1').val();
    postMovie(NewMovie).then((movies) => {
        refreshMovie();
    })
});

//second submit button
$("#btn2").click(function () {
    let editMovie = {};
    editMovie.title = $("#changeMovieName").val();
    editMovie.rating = $('#ratingID2').val();
    editMovie.id = $('#editID').val();
    patchMovie(editMovie, editMovie.id).then((movies) => {
        refreshMovie();
    });
});



