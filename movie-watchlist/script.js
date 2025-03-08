function watchlistApp() {
    return {
        newMovie: '',
        movies: JSON.parse(localStorage.getItem('movies')) || [],

        addMovie() {
            if (this.newMovie.trim()) {
                this.movies.push({ title: this.newMovie, watched: false });
                this.newMovie = '';
                this.saveMovies();
            }
        },

        toggleWatched(index) {
            this.movies[index].watched = !this.movies[index].watched;
            this.saveMovies();
        },

        removeMovie(index) {
            this.movies.splice(index, 1);
            this.saveMovies();
        },

        saveMovies() {
            localStorage.setItem('movies', JSON.stringify(this.movies));
        }
    };
}