const MongoLib = require("../lib/mongodb")

class MoviesService {
    constructor() {
        this.collection = "movies"
        this.mongoDB = new MongoLib()
    }

    async getMovies({ tags }) {
        const query = tags && { tags: { $in: tags } }
        try {
            const movies = await this.mongoDB.getAll(this.collection, query)
            return movies
        } catch (err) {
            console.log(err.message)
        }
    }

    async getMovie({ movieID }) {
        try {
            const movie = await this.mongoDB.get(this.collection, movieID)
            return movie
        } catch (err) {
            console.log(err.message)
        }
    }

    async createMovie({ movie }) {
        try {
            const createdMovieID = this.mongoDB.create(this.collection, movie)
            return createdMovieID
        } catch (err) {
            console.log(err.message)
        }
    }

    async updateMovie({ movieID, movie } = {}) {
        try {
            const updatedMovieID = await this.mongoDB.update(this.collection, movieID, movie)
            return updatedMovieID
        } catch (err) {
            console.log(err.message)
        }
    }

    async deleteMovie({ movieID }) {
        try {
            const deletedMovie = await this.mongoDB.delete(this.collection, movieID)
            return deletedMovie
        } catch (err) {
            console.log(err.message)
        }
    }

}

module.exports = MoviesService