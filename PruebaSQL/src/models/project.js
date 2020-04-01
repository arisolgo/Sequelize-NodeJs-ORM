module.exports = (sequelize, DataType) => {
    const Project = sequelize.define('Project', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        type: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        name: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        budget: {
            type: DataType.DECIMAL(10, 2),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        leaderId: {
            type: DataType.INTEGER,
            references: 'employee',
            referencesKey: 'id'

        }
    });

    Project.associate = (models) => {
        Project.belongsTo(models.Employee);
    };

    return Project;

};