const express = require ('express')
const {getAllMovies,addNewMoviesByFormBody,updatedMoviesById,deleteMoviesById, getAllMoviesById} = require("../controller/MoviesController")
const router = express.Router()

// router.get('/movies',(req,res)=>{ //Bisa Aja Pake ini,cuman nanti ribet 1-1 di define,jadinya dikumpulin di index route
//     console.log("sdf")
// })
router.get('/',getAllMovies)
router.get('/id',getAllMoviesById)
router.post('/',addNewMoviesByFormBody)
router.patch('/',updatedMoviesById)
router.delete('/',deleteMoviesById)
 
module.exports = router