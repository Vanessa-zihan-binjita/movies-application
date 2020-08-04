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

