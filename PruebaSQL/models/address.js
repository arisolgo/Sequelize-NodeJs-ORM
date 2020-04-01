module.exports = (sequelize, DataType) => { 
   const address = sequelize.define('address',{
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title:{
            type: DataType.STRING, 
            allowNull: false,
            validate:{
                notEmpty: true
            },
            done: {
                type: DataType.BOOLEAN,
                allowNull: false,
                defaultValue: false 
            }

        }
    });

    address.associate = (models) => {
        address.belongsTo(models.Users);
    };

    return address;
        
};