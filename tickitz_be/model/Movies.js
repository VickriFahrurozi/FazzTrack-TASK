//model = tempat dimana kita meletakkan fungsi/query/isinya
const db = require('../helper/db_connection')
module.exports={
    getAllMovies : (req,res) => { //get All Movies With Join
        return new Promise ((resolve,reject)=>{
            const {title,release_date} = req.body
            db.query(`SELECT * from movies inner join category 
                      on movies.id = category.movie_id where movies.title LIKE '%${title}%' 
                      Order By movies.release_date DESC` ,
            (error,result)=>{
                if(error){
                          reject({
                            message : "Data Tidak Tersedia",
                            status : 400
                          })
              }
                else{
                     resolve({
                            message :"Get From Movies Success",
                            status : 200,
                            list : result
                     })
              }
            })
        })
    },
    getAllMoviesById : (req,res) => { //get All Movies With ID
        return new Promise ((resolve,reject)=>{
            const{id} = req.body 
            db.query(`SELECT movies.title , movies.cover , 
                      category.movie_category,movies.release_date ,
                      movies.description,movies.casts,
                      movies.duration_hours,
                      movies.duration_minute
                      FROM movies
                      INNER JOIN category ON movies.id=category.movie_id WHERE id= ${id}
                      ORDER BY release_date DESC` ,
            (error,result)=>{
                if(error){
                          reject({
                            message : "Data Tidak Tersedia",
                            status : 400
                          })
              }
                else{
                     resolve({
                            message :"Get From Movies BY ID Success",
                            status : 200,
                            list : result
                     })
              }
            })
        })
    },
    addNewMoviesByFormBody : (req,res) =>{ //add New Movies From Body
        return new Promise((resolve,reject)=>{
            const {
             title,cover,release_date,director,description,casts,category,duration_hours,duration_minute
           } = req.body 
             db.query(`INSERT into movies (title,cover,release_date,director,description,casts,duration_hours,duration_minute) 
                       Values ("${title}","${cover}","${release_date}","${director}","${description}","${casts}","${duration_hours}","${duration_minute}")`,
             (err,result)=>{
                const lastid = result.insertId
               if(err){
                reject({
                    message :"Data Tidak Berhasil Di Inputt",
                    status : 400
                })
               }
               else {
                db.query(`insert into category (movie_id,movie_category) values("${lastid}","${category}")`)
                resolve({
                    message : "data movie dan category berhasil di input",
                    status : 200 ,
                    result
                })  
               }
             })
        })
        
    },
    updatedMoviesById : (req,res)=>{//BY  Input Form Data
        return new Promise((resolve,reject)=>{
            const {id,title} = req.body
            db.query(`update movies set title=${title} where id = ${id}`,
            (err,result)=>{
                if(err){
                    reject({
                        message : "Gagal Update Dataa",
                        status : 400
                    })  
                    }
                else{
                    resolve({
                        message :"Berhasil Update DataAA" ,
                        status : 200,
                        result
                    }) 
                    }
                })
        }) 
    },
    deleteMoviesById : (req,res) =>{
       return new Promise ((resolve,reject)=>{
           const {id} = req.body
           console.log(id)
           db.query(`delete from movies where id = "${id}" `,
           (err,result)=>{
             if(err){
                reject ({
                        message : "Failed Deleted Data"
                })
             }
             else{
                resolve({
                        message :"Delete Data Success",
                        status : 200 ,
                        result
                })
             }
           })
       })
    }
}