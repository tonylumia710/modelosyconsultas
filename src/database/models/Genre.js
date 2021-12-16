module.exports= (sequelize,dataTypes)=>{
    let alias = 'Genre';
    let cols = {
        id:{
            type: dataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name:{
            type: dataTypes.STRING(100),
            allowNull: false
        },
        ranking:{
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            unique: true
        },
        active:{
            type: dataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 1
        }
        //no configuro los timestamps yaq sequelize lo hacesolo
    };
    let config = {
        tableName: 'genres', //no es necesario si coincide c el nombre del modelo
        timestamps: true, //no es necesario si es true
        underscored: true
    };
    const Genre = sequelize.define(alias,cols,config);
    return Genre;
}