const express = require("express")
const router = express.Router()
const MoviesService = require("../services/movies")

const ms = new MoviesService()

router.get("/", async function (req, res, next) {
    const { tags } = req.query
    try {
        const movies = await ms.getMovies({ tags })

        res.status(200).json({
            data: movies,
            message: "Movies Listed"
        })
    } catch (err) {
        next(err)
    }
})

router.get("/:movieID", async function (req, res, next) {
    const { movieID } = req.params
    try {
        const movie = await ms.getMovie({ movieID })

        res.status(200).json({
            data: movie,
            message: "Movie retrieved"
        })
    } catch (err) {
        next(err)
    }
})

router.post("/", async function (req, res, next) {
    const { body: movie } = req
    try {
        const createMovieID = await ms.createMovie({ movie })

        res.status(201).json({
            data: createMovieID,
            message: "Movie created"
        })
    } catch (err) {
        next(err)
    }
})

router.put("/:movieID", async function (req, res, next) {
    const { movieID } = req.params
    const { body: movie } = req
    try {
        const updateMovieID = await ms.updateMovie({ movieID, movie })

        res.status(200).json({
            data: updateMovieID,
            message: "Movie updated"
        })
    } catch (err) {
        next(err)
    }
})

router.delete("/:movieID", async function (req, res, next) {
    const { movieID } = req.params
    try {
        const deleteMovieID = await ms.deleteMovie({ movieID })

        res.status(200).json({
            data: deleteMovieID,
            message: "Movie deleted"
        })
    } catch (err) {
        next(err)
    }
})

router.patch("/:movieID", async function (req, res, next) {
    const { movieID } = req.params
    const { body: movie } = req
    try {
        const updateMovieID = await ms.updateMovie({ movieID, movie })

        res.status(200).json({
            data: updateMovieID,
            message: "Movie updated"
        })
    } catch (err) {
        next(err)
    }
})



module.exports = router;