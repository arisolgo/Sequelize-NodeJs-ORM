module.exports = (sequelize, DataType) => {
    const Phone = sequelize.define('Phone', {
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
        phoneNumber: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        areaCode: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        ownerId: {
            type: DataType.INTEGER,
            references: 'employee',
            referencesKey: 'id'
        }
    });

    Phone.associate = (models) => {
        Phone.belongsTo(models.Employee);
    };

    return Phone;

};