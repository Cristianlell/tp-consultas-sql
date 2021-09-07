module.exports = (sequelize, dataTypes) => {

    let alias = "Pelicula";

    let cols = {
        id : {
            type : dataTypes.INTEGER.UNSIGNED,
            autoIncrement : true,
            allowNull : false,
            primaryKey : true
        },
        title : {
            type : dataTypes.STRING(500),
            allowNull : false
        },
        rating : {
            type : dataTypes.DECIMAL(3,1).UNSIGNED,
            allowNull : false
        },
        awards : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false,
            defaultValue : 0
        },
        release_date : {
            type : dataTypes.DATE,
            allowNull : false
        },
        length : {
            type : dataTypes.INTEGER.UNSIGNED,
            defaultValue : null
        },
        genre_id : {
            type : dataTypes.INTEGER.UNSIGNED,
            defaultValue : null
        }
    };

    let config = {
        tableName : 'movies', //no es necesario si coincide con el plural del modelo
        timestamps : true, //no es necesario si la tiene timestamps
        underscored : true
    };

    const Movie = sequelize.define(alias,cols,config);

    return Movie
}