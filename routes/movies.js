const express = require("express")
const router = express.Router()
const moviesAPI = require("../utils/mocks/movies.json")

router.get("/", async function (req, res, next) {
    try {
        const movies = await moviesAPI

        res.status(200).json({
            data: movies,
            message: "Movies Listed"
        })
    } catch (err) {
        next(err)
    }
})

router.get("/:movieID", async function (req, res, next) {
    try {
        const movie = await moviesAPI[0]

        res.status(200).json({
            data: movie,
            message: "Movie retrieved"
        })
    } catch (err) {
        next(err)
    }
})

router.post("/", async function (req, res, next) {
    try {
        const createMovieID = await moviesAPI[0].id

        res.status(201).json({
            data: createMovieID,
            message: "Movie created"
        })
    } catch (err) {
        next(err)
    }
})

router.put("/:movieID", async function (req, res, next) {
    try {
        const updateMovieID = await moviesAPI[0].id

        res.status(200).json({
            data: updateMovieID,
            message: "Movie updated"
        })
    } catch (err) {
        next(err)
    }
})

router.delete("/:movieID", async function (req, res, next) {
    try {
        const deleteMovieID = await moviesAPI[0].id

        res.status(200).json({
            data: deleteMovieID,
            message: "Movie deleted"
        })
    } catch (err) {
        next(err)
    }
})

module.exports = router;