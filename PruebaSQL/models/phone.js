module.exports = (sequelize, DataType) => { 
    const Phone = sequelize.define('Phone',{
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
 
     Phone.associate = (models) => {
         Phone.belongsTo(models.Users);
     };
 
     return Phone;
         
 };