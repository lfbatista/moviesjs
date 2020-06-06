const key = 'ce762116';

$(document).ready(() => {
  $('#searchForm').on('submit', (e) => {
  	let searchText = $('#searchText').val();
  	getMovies(searchText);
  	e.preventDefault();
  });
});

// home page
function getMovies(searchText) {
	// api requests
	axios.get('http://www.omdbapi.com/?s=' + searchText + '&apikey=' + key)
		.then((response) => {
	  	let movies = response.data.Search;
	  	let output = ``;

	  	$.each(movies, (index, movie) => {
	  		output += `
	  			<div class="col-md-3">
	  				<div class="well text-center">
	  					<a onclick="movieSelected('${movie.imdbID}')" href="#">
	  						<img src="${movie.Poster}">
	  						<h5>${movie.Title}</h5>
	  					</a>
	  				</div>
	  			</div>
	  		`;
	  	});

	  	$('#movies').html(output);
		})
		.catch((error) => {
			console.log(error);
		});
}

// pass movieId to fetch movie details
function movieSelected(id) {
	sessionStorage.setItem('movieId', id);
	window.location = 'movie.html';

	return false;
}

// movie page
function getMovie() {
	let movieId = sessionStorage.getItem('movieId');

	axios.get('http://www.omdbapi.com/?i=' + movieId + '&apikey=' + key)
		.then((response) => {
	  	let movie = response.data;
	  	let output = `
		  	<div class="row">
		  		<div class="col-md-4">
		  			<img src="${movie.Poster}" class="thumbnail">
		  		</div>
		  		<div class="col-md-8">
		  			<h2>${movie.Title}</h2>
		  			<ul class="list-group">
		  				<li class="list-group-item"><strong>Genre: ${movie.Genre}</li>
		  				<li class="list-group-item"><strong>Released: ${movie.Released}</li>
		  				<li class="list-group-item"><strong>IMDB: ${movie.imdbRating}</li>
		  				<li class="list-group-item"><strong>Director(s): ${movie.Director}</li>
		  				<li class="list-group-item"><strong>Writer(s): ${movie.Writer}</li>
		  				<li class="list-group-item"><strong>Actors: ${movie.Actors}</li>
		  			</ul>
		  			<br>
						<div class="well">
							<h4>Plot</h4>
			  			${movie.Plot}
			  			<br>
			  			<br>
				  		<a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">IMDB Page</a>
				  		<a href="index.html" class="btn btn-secondary">Back</a>
				  	</div>
		  		</div>
		  	</div>
		  	<br class="well">
	  	`;

	  	$('#movie').html(output);
		})
		.catch((error) => {
			console.log(error);
		});
}