module.exports = (sequelize, DataType) => {
    const ProjectEmployee = sequelize.define('ProjectEmployee', {
        projectId: {
            type: DataType.INTEGER,
            references: 'project',
            referencesKey: 'id'
        },
        employeeId: {
            type: DataType.INTEGER,
            references: 'employee',
            referencesKey: 'id'
        }
    });



    return ProjectEmployee;

};