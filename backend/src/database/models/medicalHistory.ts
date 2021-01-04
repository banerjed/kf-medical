import { DataTypes } from 'sequelize';

/**
 * MedicalHistory database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const medicalHistory = sequelize.define(
    'medicalHistory',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      smoking: {
        type: DataTypes.ENUM,
        values: [
          "None",
          "Cigarette",
          "Bidi",
          "Ganja",
          "Multiple",
          "Other"
        ],
      },
      drugUse: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      drink: {
        type: DataTypes.ENUM,
        values: [
          "Occasionally",
          "Frequently",
          "Daily"
        ],
      },
      familyHistory: {
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

  medicalHistory.associate = (models) => {
    models.medicalHistory.belongsTo(models.patient, {
      as: 'patient',
      constraints: false,
    });

    models.medicalHistory.belongsTo(models.chronicDiseaseEnum, {
      as: 'chronicDisease1',
      constraints: false,
    });

    models.medicalHistory.belongsTo(models.chronicDiseaseEnum, {
      as: 'chronicDisease2',
      constraints: false,
    });

    models.medicalHistory.belongsTo(models.chronicDiseaseEnum, {
      as: 'chronicDisease3',
      constraints: false,
    });


    
    models.medicalHistory.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.medicalHistory.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.medicalHistory.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return medicalHistory;
}
