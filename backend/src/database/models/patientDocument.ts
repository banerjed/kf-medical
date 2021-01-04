import { DataTypes } from 'sequelize';
import moment from 'moment';

/**
 * PatientDocument database model.
 * See https://sequelize.org/v5/manual/models-definition.html to learn how to customize it.
 */
export default function (sequelize) {
  const patientDocument = sequelize.define(
    'patientDocument',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      reportName: {
        type: DataTypes.STRING(200),
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      reportDate: {
        type: DataTypes.DATEONLY,
        get: function() {
          // @ts-ignore
          return this.getDataValue('reportDate')
            ? moment
                // @ts-ignore
                .utc(this.getDataValue('reportDate'))
                .format('YYYY-MM-DD')
            : null;
        },
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

  patientDocument.associate = (models) => {
    models.patientDocument.belongsTo(models.patient, {
      as: 'patient',
      constraints: false,
    });

    models.patientDocument.hasMany(models.file, {
      as: 'image',
      foreignKey: 'belongsToId',
      constraints: false,
      scope: {
        belongsTo: models.patientDocument.getTableName(),
        belongsToColumn: 'image',
      },
    });
    
    models.patientDocument.belongsTo(models.tenant, {
      as: 'tenant',
    });

    models.patientDocument.belongsTo(models.user, {
      as: 'createdBy',
    });

    models.patientDocument.belongsTo(models.user, {
      as: 'updatedBy',
    });
  };

  return patientDocument;
}
