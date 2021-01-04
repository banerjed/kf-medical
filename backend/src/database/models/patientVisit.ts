import { DataTypes } from 'sequelize';
import moment from 'moment';

/**
 * PatientVisit database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const patientVisit = sequelize.define(
    'patientVisit',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      visitDate: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('visitDate')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('visitDate'))
                .format('YYYY-MM-DD')
            : null;
        },
        allowNull: false,
      },
      otherSymptoms: {
        type: DataTypes.TEXT,
      },
      vitalStatistics: {
        type: DataTypes.TEXT,
      },
      diagnosis: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      requestedLabs: {
        type: DataTypes.TEXT,
      },
      med1Qty: {
        type: DataTypes.INTEGER,
      },
      med2Qty: {
        type: DataTypes.INTEGER,
      },
      med3Qty: {
        type: DataTypes.INTEGER,
      },
      med4Qty: {
        type: DataTypes.INTEGER,
      },
      medicineInstructions: {
        type: DataTypes.TEXT,
      },
      referralLab: {
        type: DataTypes.TEXT,
      },
      referralHospital: {
        type: DataTypes.TEXT,
      },
      referredDoctor: {
        type: DataTypes.TEXT,
      },
      returnIn: {
        type: DataTypes.ENUM,
        values: [
          "1week",
          "2weeks",
          "3weeks",
          "4weeks",
          "6weeks",
          "2months",
          "3months",
          "4months",
          "6months",
          "1year"
        ],
      },
      patientCopay: {
        type: DataTypes.INTEGER,
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

  patientVisit.associate = (models) => {
    models.patientVisit.belongsTo(models.patient, {
      as: 'patient',
      constraints: false,
    });

    models.patientVisit.belongsTo(models.healthCenter, {
      as: 'medicalCenter',
      constraints: false,
    });

    models.patientVisit.belongsTo(models.doctor, {
      as: 'doctor',
      constraints: false,
    });

    models.patientVisit.belongsTo(models.symptomsEnum, {
      as: 'symptom1',
      constraints: false,
    });

    models.patientVisit.belongsTo(models.symptomsEnum, {
      as: 'symptom2',
      constraints: false,
    });

    models.patientVisit.belongsTo(models.symptomsEnum, {
      as: 'symptom3',
      constraints: false,
    });

    models.patientVisit.belongsTo(models.medicineEnum, {
      as: 'medicine1',
      constraints: false,
    });

    models.patientVisit.belongsTo(models.medicineEnum, {
      as: 'medicine2',
      constraints: false,
    });

    models.patientVisit.belongsTo(models.medicineEnum, {
      as: 'medicine3',
      constraints: false,
    });

    models.patientVisit.belongsTo(models.medicineEnum, {
      as: 'medicine4',
      constraints: false,
    });

    models.patientVisit.hasMany(models.file, {
      as: 'prescription',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: models.patientVisit.getTableName(),
        belongsToColumn: 'prescription',
      },
    });
    
    models.patientVisit.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.patientVisit.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.patientVisit.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return patientVisit;
}
