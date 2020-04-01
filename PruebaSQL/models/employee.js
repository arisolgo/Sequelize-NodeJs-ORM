module.exports = (sequelize, DataType) => { 
    const Employee = sequelize.define('Employee',{
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
 
     Employee.associate = (models) => {
         Employee.belongsTo(models.Employee);
     };
 
     return Employee;
         
 };