const db = require('../database/models');
const Op = db.Sequelize.Op;
module.exports = {
    list : (req,res) => {
        let movies = db.Pelicula.findAll();
        let genres = db.Genero.findAll();
        Promise.all([movies,genres])
        .then(([movies,genres]) => res.render('moviesList',{
            title : "Peliculas",
            movies,
            genres
        }))
        .catch(error => console.log(error))
    },
    detail : (req,res) => {
        db.Pelicula.findByPk(req.params.id)
        .then(movie => {
            res.render('moviesDetail',{
            movie
        })})
        .catch(error => console.log(error))
    },
    new:(req,res) => {
        db.Pelicula.findAll({
            order : [
                ['release_date','DESC']
            ],
            limit: 5
        })
        .then((movies) =>res.render('newestMovies',{
            movies
        }))
    },
    recomended:(req,res) => {
        db.Pelicula.findAll({
            where:{
                rating: {[Op.gte]: 6}
            },
            order : [
                ['rating','DESC'],      
            ],
        })
        .then((movies) => res.render('recommendedMovies',{
            movies
        }))
        .catch(error=> console.log(error))
    }
}