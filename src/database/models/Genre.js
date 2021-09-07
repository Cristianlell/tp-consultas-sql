module.exports = (sequelize,dataTypes) => {
    let alias = "Genero";
    
    let cols = {
        id : {
            type : dataTypes.INTEGER.UNSIGNED,
            autoIncrement : true,
            allowNull : false,
            primaryKey : true
        },
        name : {
            type : dataTypes.STRING(100),
            allowNull : false
        },
        ranking : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false,
            unique : true       
        },
        active : {
            type : dataTypes.BOOLEAN,
            defaultValue : 1,
            allowNull : false
        }
    }

    let config = {
        tableName : 'genres',
        underscored : true
    }

    const Genre = sequelize.define(alias, cols, config);

    return Genre
}