import { DataTypes } from 'sequelize';
import moment from 'moment';

/**
 * MedicineInventory database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const medicineInventory = sequelize.define(
    'medicineInventory',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      inventoryDate: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('inventoryDate')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('inventoryDate'))
                .format('YYYY-MM-DD')
            : null;
        },
        allowNull: false,
      },
      count: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {

        }
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

  medicineInventory.associate = (models) => {
    models.medicineInventory.belongsTo(models.medicineEnum, {
      as: 'medicine',
      constraints: false,
    });


    
    models.medicineInventory.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.medicineInventory.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.medicineInventory.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return medicineInventory;
}
