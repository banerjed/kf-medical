import { DataTypes } from 'sequelize';

/**
 * HealthCenter database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const healthCenter = sequelize.define(
    'healthCenter',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      phoneNumber: {
        type: DataTypes.TEXT,
      },
      importHash: {
        type: DataTypes.STRING(255),
        allowNull: true,        
      },
    },
    {
      indexes: [
        {
          unique: true,
          fields: ['importHash', 'tenantId'],
          where: {
            deletedAt: null,
          },
        },

      ],
      timestamps: true,
      paranoid: true,
    },
  );

  healthCenter.associate = (models) => {
    models.healthCenter.belongsTo(models.user, {
      as: 'adminName',
      constraints: false,
    });


    
    models.healthCenter.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.healthCenter.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.healthCenter.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return healthCenter;
}
