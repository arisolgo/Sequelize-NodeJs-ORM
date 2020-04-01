module.exports = (sequelize, DataType) => { 
    const projectEmployee = sequelize.define('projectEmployee',{
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
 
     projectEmployee.associate = (models) => {
         projectEmployee.belongsTo(models.Users);
     };
 
     return projectEmployee;
         
 };