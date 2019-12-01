const moviesAPI = require("../utils/mocks/movies.json")

class MoviesService {

    async getMovies() {
        try {
            const movies = await moviesAPI
            return movies
        } catch (err) {
            console.log(err.message)
        }
    }

    async getMovie() {
        try {
            const movie = await moviesAPI[0]
            return movie
        } catch (err) {
            console.log(err.message)
        }
    }

    async createMovie() {
        try {
            const createdMovieID = await moviesAPI[0].id
            return createdMovieID
        } catch (err) {
            console.log(err.message)
        }
    }

    async updateMovie() {
        try {
            const updatedMovieID = await moviesAPI[0].id
            return updatedMovieID
        } catch (err) {
            console.log(err.message)
        }
    }

    async deleteMovie() {
        try {
            const deletedMovie = await moviesAPI[0].id
            return deletedMovie
        } catch (err) {
            console.log(err.message)
        }
    }

}

module.exports = MoviesService