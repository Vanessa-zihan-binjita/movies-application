$(window).load(function() {
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


getMovies().then((movies) => {
  console.log('Here are all the movies:');
$('#movieList').html('')
  movies.forEach(({title, rating, id}) => {
    $('#movieList').append(
    `<ul class="movieTable"><li>id#${id}</li> <li>${title} </li> <li>rating: ${rating}</li></ul>`
    )
  });
});

const url = '/api/movies';
postMovie().then((movies) => {
  $("#btn1").click(function(){
    let NewMovie = {};
    NewMovie.title = $("#movieName").val();
    NewMovie.rating = $('#ratingID1').val();
    console.log(NewMovie)
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(NewMovie),
    };
  fetch(url, options)
      .then(/* post was created successfully */)
      .catch(function (error) {
        console.log(error)
      });
  })

});


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
