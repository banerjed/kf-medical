import { DataTypes } from 'sequelize';

/**
 * Doctor database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const doctor = sequelize.define(
    'doctor',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          len: [5, 100],
          notEmpty: true,
        }
      },
      specialization: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      phone: {
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
        {
          unique: true,
          fields: ['name', 'tenantId'],
          where: {
            deletedAt: null,
          },
        },
      ],
      timestamps: true,
      paranoid: true,
    },
  );

  doctor.associate = (models) => {
    models.doctor.belongsTo(models.user, {
      as: 'user',
      constraints: false,
    });


    
    models.doctor.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.doctor.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.doctor.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return doctor;
}
