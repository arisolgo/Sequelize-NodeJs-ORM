


module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define('Employee', {

        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        salary: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        startDate: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        endDate: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        managerId: {
            type: DataTypes.INTEGER,
            references:{
               model: 'employee', 
               referencesKey: 'id'
            } 
        },

        addressId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'address',
                referencesKey: 'id'
            },
        }



    });

    Employee.associate = (models) => {
        Employee.hasMany(models.Project);
    };
    
    Employee.associate = (models) => {
        Employee.hasOne(models.Address)
    };

    Employee.associate = (models) => {
        Employee.hasMany(models.Employee)
    };

    return Employee;

};