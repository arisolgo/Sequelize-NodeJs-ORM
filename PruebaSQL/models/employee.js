module.exports = (sequelize, DataType) => {
    const Employee = sequelize.define('Employee', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        lastName: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        salary: {
            type: DataType.DECIMAL(10, 2),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        startDate: {
            type: DataType.DATE,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        endDate: {
            type: DataType.DATE,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        managerId: {
            type: DataType.INTEGER,
            references: 'employee',
            referencesKey: 'id'


        },
        addressId: {
            type: DataType.INTEGER,
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