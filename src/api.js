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
    return fetch(`api/movies/`+id, {
      method: 'DELETE',
    })
  }
};