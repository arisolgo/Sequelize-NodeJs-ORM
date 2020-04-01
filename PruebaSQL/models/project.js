module.exports = (sequelize, DataType) => { 
    const Project = sequelize.define('Project',{
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
 
     Project.associate = (models) => {
         Project.belongsTo(models.Users);
     };
 
     return Project;
         
 };