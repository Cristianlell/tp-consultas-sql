const db = require('../database/models')

module.exports = {
    // Se deberán listar todos los géneros de la base de datos. Cada género deberá ser un hipervínculo para ver el detalle del mismo.
    list : (req,res) => {
        db.Genero.findAll()
        .then(genres => res.render('genresList',{genres}))
    }, //Detalle del género. Se deberá mostrar del género correspondiente al id que aparezca en la URL. Cada género deberá listar sus datos (Id, name, ranking).
    detail :(req,res) => {
        db.Genero.findByPk(req.params.id)
        .then(genre => {
            res.render('genresDetail',{
                genre
        })})
        .catch(error => console.log(error))
    }
}