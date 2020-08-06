$(window).load(function () {
    $('#loading').hide();
});

/**
 * es6 modules and imports
 */
import sayHello from './hello';

sayHello('World');

$.get(`http://img.omdbapi.com/?apikey=36c1feb3&`).done(function(data) {
     console.log(data)
 })


/**
 * require style imports
 */
const {getMovie, getMovies, postMovie, patchMovie, deleteMovie} = require('./api.js');

function refreshMovie() {
    getMovies().then((movies) => {
        console.log('Here are all the movies:');
        $('#movieList').html('')
        movies.forEach(({title, rating, id}) => {
            $('#movieList').append(
                `<div class="card" style="width: 18rem;">
<!--        <img src="..." class="card-img-top" alt="...">-->
        <div class="card-body">
        <h5 class="card-title">${title}</h5>
    <p class="card-text">id#${id}</p>
    <p class="card-text">rating: ${rating}</p>
    <a href="#" class="btn btn-primary edit" data-id="${id}">Edit</a>
    <a href="#" class="btn btn-primary delete" data-id="${id}">Delete</a>
    </div>
    </div>`
            )
        });
        $('.edit').click(function () {
          let id = $(this).attr('data-id')
          getMovie(id).then((movie) => {
             $('#ratingID2').val(movie.rating);
             $("#changeMovieName").val(movie.title);
             $("#editID").val(movie.id);
          })
        })
      $('.delete').click(function () {
        let id = $(this).attr('data-id')
        deleteMovie(id).then((movie) => {
         console.log(movie)
          refreshMovie();
        })
      })
    });
}
  refreshMovie();
const url = '/api/movies';

$("#btn1").click(function () {
    let NewMovie = {};
    NewMovie.title = $("#movieName").val();
    NewMovie.rating = $('#ratingID1').val();
    postMovie(NewMovie).then((movies) => {
     console.log(movies);
     refreshMovie();
    })
});

//second submit button
$("#btn2").click(function(){
  let editMovie = {};
  editMovie.title = $("#changeMovieName").val();
  editMovie.rating = $('#ratingID2').val();
  editMovie.id = $('#editID').val();
  patchMovie(editMovie, editMovie.id).then((movies) => {
    console.log(movies)
    refreshMovie();
  });
});



