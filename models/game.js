function(sequelize, DataTypes) {
    return sequelize.define('game', {
        title: {
            type: DataTypes.STRING(25),
            allowNull: false,
        },

        owner_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        studio: {
            type: DataTypes.STRING,
            allowNull: false,            
        },

        esrb_rating: {
            type: DataTypes.CHAR(5),
            allowNull: false,
        },

        user_rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 5
            }
        },

        have_played : {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        }
    })
}