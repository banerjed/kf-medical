import { DataTypes } from 'sequelize';

/**
 * MedicineEnum database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const medicineEnum = sequelize.define(
    'medicineEnum',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      medicineName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          len: [5, 100],
          notEmpty: true,
        }
      },
      keptInStock: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
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
          fields: ['medicineName', 'tenantId'],
          where: {
            deletedAt: null,
          },
        },
      ],
      timestamps: true,
      paranoid: true,
    },
  );

  medicineEnum.associate = (models) => {



    
    models.medicineEnum.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.medicineEnum.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.medicineEnum.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return medicineEnum;
}
