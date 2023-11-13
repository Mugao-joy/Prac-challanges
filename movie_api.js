//create a function for the api key
// fetch data from api url...if else
//display webpage
//innerhtml
//add css styling
function fetchMovieData(apiKey) {
    const apiUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data.Error) {
          alert(data.Error)
        } else {
          displayMovieInfo(data)
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })
  }

  // Function to display movie information on the webpage
  function displayMovieInfo(movie) {
    const movieInfoContainer = document.getElementById('movie-info')
    movieInfoContainer.innerHTML = `
      <h2>${movie.Title}</h2>
      <p><strong>Year:</strong> ${movie.Year}</p>
      <p><strong>Genre:</strong> ${movie.Genre}</p>
      <p><strong>Language:</strong> ${movie.Language}</p>
      <p><strong>Director:</strong> ${movie.Director}</p>
      <p><strong>IMDB Rating:</strong> ${movie.imdbRating}</p>
      <p><strong>Runtime:</strong> ${movie.Runtime}</p>

    `
  }

// Call the fetchMovieData function with the provided API key
fetchMovieData('78f9c767');