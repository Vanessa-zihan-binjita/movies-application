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
    `<ul><li>id#${id}</li> <li>${title} </li> <li>rating: ${rating}</li></ul>`
    )
  });
}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.')
  console.log(error);
});

