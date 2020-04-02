module.exports = (sequelize, DataTypes) => {
    const ProjectEmployee = sequelize.define('ProjectEmployee', {
        projectId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'project',
                referencesKey: 'id'
            }

        },
        employeeId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'employee',
                referencesKey: 'id'
            }

        }
    });

    // ProjectEmployee.associate = (models) => {
    //     ProjectEmployee.belongsTo(models.Employee);
    // };
    // ProjectEmployee.associate = (models) => {
    //     ProjectEmployee.belongsTo(models.Project);
    // };

    return ProjectEmployee;

};