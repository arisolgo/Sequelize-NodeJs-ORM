module.exports = (sequelize, DataTypes) => {
    const Phone = sequelize.define('Phone', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }


        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        areaCode: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        ownerId: {
            type: DataTypes.INTEGER,
            references: 'employee',
            referencesKey: 'id'
        }
    });

    Phone.associate = (models) => {
        Phone.belongsTo(models.Employee);
    };

    return Phone;

};