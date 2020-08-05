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
const {getMovies} = require('./api.js');


getMovies().then((movies) => {
  console.log('Here are all the movies:');
$('#movieList').html('')
  movies.forEach(({title, rating, id}) => {
    $('#movieList').append(
    `<ul class="movieTable"><li>id#${id}</li> <li>${title} </li> <li>rating: ${rating}</li></ul>`
    )
  });

$('#editMovieName').keypress(function () {

  if ($('#editMovieName').val().toLowerCase() === movies.title.toLowerCase()) {
   if( typeof $("#changeMovieName").val() === "string" && $("#changeMovieName").val() !== ("")) {
     movies.title = $("#changeMovieName").val();
   }
  }
  console.log($('#editMovieName').val().toLowerCase())
})

}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.')
  console.log(error);
});


