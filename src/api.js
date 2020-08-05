module.exports = {
  getMovies: () => {
    return fetch('/api/movies')
      .then(response => response.json());
  }
};

const url = '/api/movies';

$("#btn1").click(function(){
  let NewMovie = {};
  NewMovie.title = $("#movieName").val();
  NewMovie.rating = $('#ratingID').val();
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
//second submit button
var currentMovies = [];
$("#btn2").click(function(){
  let editMovie = {};
  editMovie.title = $("#changeMovieName").val();
  editMovie.rating = $('#ratingID2').val();
  console.log(editMovie)
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(editMovie),
  };

  fetch(url+"/" + $("#changeMovieName"), options)
      .then(/* post was created successfully */)
      .catch(function (error) {
        console.log(error)
      });
})

