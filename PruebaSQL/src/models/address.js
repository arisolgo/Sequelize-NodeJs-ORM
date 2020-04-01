module.exports = (sequelize, DataType) => {
    const Address = sequelize.define('Address', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        street: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        city: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        province: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        country: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        postcode: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }


    });

    Address.associate = (models) => {
        Address.belongsTo(models.Employee);
    };

    return Address;

};