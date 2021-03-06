//controller : tempat dimana kita menghubungkan antara client dan database
const { getAllMovies, addNewMoviesByFormBody, updatedMoviesById, deleteMoviesById, getAllMoviesById } = require("../model/movies")

module.exports={ 
    getAllMovies : async (req,res) => { //get All Movies With Join
        try {
            const result = await getAllMovies(req,res)
            res.status(200).send(result)
        } catch (error) {
            res.status(400).send({message:"Masih Ada Error  ",error})
        }
    },
    getAllMoviesById : async (req,res) => { //get All Movies With Join
        try {
            const result = await getAllMoviesById(req,res)
            res.status(200).send(result)
        } catch (error) {
            res.status(400).send({message:"Masih Ada Error  ",error})
        }
    },
    addNewMoviesByFormBody :async (req,res) =>{ //add New Movies From Body
        try {
            const result = await addNewMoviesByFormBody(req,res)
            res.status(200).send(result)
        } catch (error) {
            res.status(400).send(error)
        }
    },
    updatedMoviesById : async(req,res)=>{//BY  Input Form Data
        try {
            const result = await updatedMoviesById(req,res)
            res.status(200).send(result)
        } catch (error) {
            res.status(400).send(error)
        }
    },
    deleteMoviesById :async(req,res) =>{
        try {
            const result = await deleteMoviesById(req,res)
            res.status(200).send(result)
        } catch (error) {
            res.status(400).send(error)
        }
    }
}