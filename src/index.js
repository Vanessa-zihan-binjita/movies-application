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
const {getMovies, postMovie, patchMovie, deleteMovie} = require('./api.js');

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
    <a href="#" class="btn btn-primary edit">Edit</a>
    <a href="#" class="btn btn-primary delete">Delete</a>
    </div>
    </div>`
                // `<ul class="movieTable"><li>id#${id}</li> <li>${title} </li> <li>rating: ${rating}</li></ul>`
            )
        });
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
//
// //second submit button
// patchMovie().then((movies) => {
//   $("#btn2").click(function(){
//     let editMovie = {};
//     editMovie.title = $("#changeMovieName").val();
//     editMovie.rating = $('#ratingID2').val();
//     console.log(editMovie)
//     const options = {
//       method: 'PATCH',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(editMovie),
//     };
//
//     fetch(url+"/" + $("#changeMovieName"), options)
//         .then(/* post was created successfully */)
//         .catch(function (error) {
//           console.log(error)
//         });
//   });
// });


// })
// $('#editMovieName').keypress(function () {
//
//   if ($('#editMovieName').val().toLowerCase() === movies.title.toLowerCase()) {
//    if( typeof $("#changeMovieName").val() === "string" && $("#changeMovieName").val() !== ("")) {
//      movies.title = $("#changeMovieName").val();
//    }
//   }
//   console.log($('#editMovieName').val().toLowerCase())
// })
//
// }).catch((error) => {
//   alert('Oh no! Something went wrong.\nCheck the console for details.')
//   console.log(error);
// });
//
//
