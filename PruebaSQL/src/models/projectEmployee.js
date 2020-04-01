module.exports = (sequelize, DataTypes) => {
    const ProjectEmployee = sequelize.define('ProjectEmployee', {
        projectId: {
            type: DataTypes.INTEGER,
            references: 'project',
            referencesKey: 'id'
        },
        employeeId: {
            type: DataTypes.INTEGER,
            references: 'employee',
            referencesKey: 'id'
        }
    });



    return ProjectEmployee;

};