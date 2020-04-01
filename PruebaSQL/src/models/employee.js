


module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define('Employee', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },

        lastName: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        salary: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        startDate: {
            type: DataTypes.DATE,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        endDate: {
            type: DataTypes.DATE,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        managerId: {
            type: DataTypes.INTEGER,
            references: 'employee',
            referencesKey: 'id'


        },
        addressId: {
            type: DataTypes.INTEGER,
            references: 'address',
            referencesKey: 'id'

        }



    });

    Employee.associate = (models) => {
        Employee.hasMany(models.Project);
    };
    Employee.associate = (models) => {
        Employee.hasOne(models.Address);
    };

    return Employee;

};