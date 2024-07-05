document.getElementById('search-button').addEventListener('click', searchMovies);

function searchMovies() {
    const query = document.getElementById('search-input').value;
    if (query) {
        fetchMovies(query);
    }
}

function fetchMovies(query) {
    const apiKey = '2e001b4e48265da7e9e23aaf8ff0ef50'; // Replace with your actual API key
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayMovies(data.results))
        .catch(error => console.error('Error fetching data:', error));
}

function displayMovies(movies) {
    const moviesContainer = document.getElementById('movies');
    moviesContainer.innerHTML = '';

    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('col-md-3', 'movie');

        const moviePoster = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'placeholder.jpg';
        movieElement.innerHTML = `
            <div class="card">
                <img src="${moviePoster}" class="card-img-top" alt="${movie.title}">
                <div class="card-body">
                    <h5 class="card-title movie-title">${movie.title}</h5>
                </div>
            </div>
        `;

        moviesContainer.appendChild(movieElement);
    });
}
