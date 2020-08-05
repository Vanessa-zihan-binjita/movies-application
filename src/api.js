module.exports = {
  getMovie: (id) => {
    return fetch('/api/movies/'+id)
        .then(response => response.json());
},
  getMovies: () => {
    return fetch('/api/movies')
      .then(response => response.json());
  },
  postMovie: (movie) => {
    return fetch('api/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movie),
    })
  },
  patchMovie: (movie, id) => {
    return fetch('api/movies/'+id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movie),
    })
  },
  deleteMovie: (id) => {
    return fetch(`api/movies/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
};

// //second submit button
// var currentMovies = [];
// $("#btn2").click(function(){
//   let editMovie = {};
//   editMovie.title = $("#changeMovieName").val();
//   editMovie.rating = $('#ratingID2').val();
//   console.log(editMovie)
//   const options = {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(editMovie),
//   };
//
//   fetch(url+"/" + $("#changeMovieName"), options)
//       .then(/* post was created successfully */)
//       .catch(function (error) {
//         console.log(error)
//       });
// })
//
