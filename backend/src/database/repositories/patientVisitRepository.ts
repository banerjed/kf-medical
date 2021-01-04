import SequelizeRepository from '../../database/repositories/sequelizeRepository';
import AuditLogRepository from '../../database/repositories/auditLogRepository';
import lodash from 'lodash';
import SequelizeFilterUtils from '../../database/utils/sequelizeFilterUtils';
import Error404 from '../../errors/Error404';
import Sequelize from 'sequelize';
import FileRepository from './fileRepository';
import { IRepositoryOptions } from './IRepositoryOptions';

const Op = Sequelize.Op;

/**
 * Handles database operations for the PatientVisit.
 * See https://sequelize.org/v5/index.html to learn how to customize it.
 */
class PatientVisitRepository {
  /**
   * Creates the PatientVisit.
   *
   * @param {Object} data
   * @param {Object} [options]
   */
  static async create(data, options: IRepositoryOptions) {
    const currentUser = SequelizeRepository.getCurrentUser(
      options,
    );

    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    const record = await options.database.patientVisit.create(
      {
        ...lodash.pick(data, [
          'visitDate',
          'otherSymptoms',
          'vitalStatistics',
          'diagnosis',
          'requestedLabs',
          'med1Qty',
          'med2Qty',
          'med3Qty',
          'med4Qty',
          'medicineInstructions',
          'referralLab',
          'referralHospital',
          'referredDoctor',
          'returnIn',
          'patientCopay',          
          'importHash',
        ]),
        tenantId: tenant.id,
        createdById: currentUser.id,
        updatedById: currentUser.id,
      },
      {
        transaction,
      },
    );

    await record.setPatient(data.patient || null, {
      transaction,
    });
    await record.setMedicalCenter(data.medicalCenter || null, {
      transaction,
    });
    await record.setDoctor(data.doctor || null, {
      transaction,
    });
    await record.setSymptom1(data.symptom1 || null, {
      transaction,
    });
    await record.setSymptom2(data.symptom2 || null, {
      transaction,
    });
    await record.setSymptom3(data.symptom3 || null, {
      transaction,
    });
    await record.setMedicine1(data.medicine1 || null, {
      transaction,
    });
    await record.setMedicine2(data.medicine2 || null, {
      transaction,
    });
    await record.setMedicine3(data.medicine3 || null, {
      transaction,
    });
    await record.setMedicine4(data.medicine4 || null, {
      transaction,
    });
  
    await FileRepository.replaceRelationFiles(
      {
        belongsTo: options.database.patientVisit.getTableName(),
        belongsToColumn: 'prescription',
        belongsToId: record.id,
      },
      data.prescription,
      options,
    );
  
    await this._createAuditLog(
      AuditLogRepository.CREATE,
      record,
      data,
      options,
    );

    return this.findById(record.id, options);
  }

  /**
   * Updates the PatientVisit.
   *
   * @param {Object} data
   * @param {Object} [options]
   */
  static async update(id, data, options: IRepositoryOptions) {
    const currentUser = SequelizeRepository.getCurrentUser(
      options,
    );

    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    let record = await options.database.patientVisit.findByPk(
      id,
      {
        transaction,
      },
    );

    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    if (
      !record ||
      String(record.tenantId) !== String(tenant.id)
    ) {
      throw new Error404();
    }

    record = await record.update(
      {
        ...lodash.pick(data, [
          'visitDate',
          'otherSymptoms',
          'vitalStatistics',
          'diagnosis',
          'requestedLabs',
          'med1Qty',
          'med2Qty',
          'med3Qty',
          'med4Qty',
          'medicineInstructions',
          'referralLab',
          'referralHospital',
          'referredDoctor',
          'returnIn',
          'patientCopay',          
          'importHash',
        ]),
        updatedById: currentUser.id,
      },
      {
        transaction,
      },
    );

    await record.setPatient(data.patient || null, {
      transaction,
    });
    await record.setMedicalCenter(data.medicalCenter || null, {
      transaction,
    });
    await record.setDoctor(data.doctor || null, {
      transaction,
    });
    await record.setSymptom1(data.symptom1 || null, {
      transaction,
    });
    await record.setSymptom2(data.symptom2 || null, {
      transaction,
    });
    await record.setSymptom3(data.symptom3 || null, {
      transaction,
    });
    await record.setMedicine1(data.medicine1 || null, {
      transaction,
    });
    await record.setMedicine2(data.medicine2 || null, {
      transaction,
    });
    await record.setMedicine3(data.medicine3 || null, {
      transaction,
    });
    await record.setMedicine4(data.medicine4 || null, {
      transaction,
    });

    await FileRepository.replaceRelationFiles(
      {
        belongsTo: options.database.patientVisit.getTableName(),
        belongsToColumn: 'prescription',
        belongsToId: record.id,
      },
      data.prescription,
      options,
    );

    await this._createAuditLog(
      AuditLogRepository.UPDATE,
      record,
      data,
      options,
    );

    return this.findById(record.id, options);
  }

  /**
   * Deletes the PatientVisit.
   *
   * @param {string} id
   * @param {Object} [options]
   */
  static async destroy(id, options: IRepositoryOptions) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    let record = await options.database.patientVisit.findByPk(
      id,
      {
        transaction,
      },
    );

    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    if (
      !record ||
      String(record.tenantId) !== String(tenant.id)
    ) {
      throw new Error404();
    }

    await record.destroy({
      transaction,
    });

    await this._createAuditLog(
      AuditLogRepository.DELETE,
      record,
      record,
      options,
    );
  }

  /**
   * Finds the PatientVisit and its relations.
   *
   * @param {string} id
   * @param {Object} [options]
   */
  static async findById(id, options: IRepositoryOptions) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    const include = [
      {
        model: options.database.patient,
        as: 'patient',
      },
      {
        model: options.database.healthCenter,
        as: 'medicalCenter',
      },
      {
        model: options.database.doctor,
        as: 'doctor',
      },
      {
        model: options.database.symptomsEnum,
        as: 'symptom1',
      },
      {
        model: options.database.symptomsEnum,
        as: 'symptom2',
      },
      {
        model: options.database.symptomsEnum,
        as: 'symptom3',
      },
      {
        model: options.database.medicineEnum,
        as: 'medicine1',
      },
      {
        model: options.database.medicineEnum,
        as: 'medicine2',
      },
      {
        model: options.database.medicineEnum,
        as: 'medicine3',
      },
      {
        model: options.database.medicineEnum,
        as: 'medicine4',
      },
    ];

    const record = await options.database.patientVisit.findByPk(
      id,
      {
        include,
        transaction,
      },
    );

    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    if (
      !record ||
      String(record.tenantId) !== String(tenant.id)
    ) {
      throw new Error404();
    }

    return this._fillWithRelationsAndFiles(record, options);
  }

  /**
   * Counts the number of PatientVisits based on the filter.
   *
   * @param {Object} filter
   * @param {Object} [options]
   */
  static async count(filter, options: IRepositoryOptions) {
    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    return options.database.patientVisit.count(
      {
        where: {
          ...filter,
          tenantId: tenant.id,
        },
      },
      {
        transaction,
      },
    );
  }

  /**
   * Finds the PatientVisits based on the query.
   * See https://sequelize.org/v5/manual/querying.html to learn how to
   * customize the query.
   *
   * @param {Object} query
   * @param {Object} query.filter
   * @param {number} query.limit
   * @param  {number} query.offset
   * @param  {string} query.orderBy
   * @param {Object} [options]
   *
   * @returns {Promise<Object>} response - Object containing the rows and the count.
   */
  static async findAndCountAll(
    { filter, limit = 0, offset = 0, orderBy = '' },
    options: IRepositoryOptions,
  ) {
    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    let whereAnd: Array<any> = [];
    let include = [
      {
        model: options.database.patient,
        as: 'patient',
      },
      {
        model: options.database.healthCenter,
        as: 'medicalCenter',
      },
      {
        model: options.database.doctor,
        as: 'doctor',
      },
      {
        model: options.database.symptomsEnum,
        as: 'symptom1',
      },
      {
        model: options.database.symptomsEnum,
        as: 'symptom2',
      },
      {
        model: options.database.symptomsEnum,
        as: 'symptom3',
      },
      {
        model: options.database.medicineEnum,
        as: 'medicine1',
      },
      {
        model: options.database.medicineEnum,
        as: 'medicine2',
      },
      {
        model: options.database.medicineEnum,
        as: 'medicine3',
      },
      {
        model: options.database.medicineEnum,
        as: 'medicine4',
      },      
    ];

    whereAnd.push({
      tenantId: tenant.id,
    });

    if (filter) {
      if (filter.id) {
        whereAnd.push({
          ['id']: SequelizeFilterUtils.uuid(filter.id),
        });
      }

      if (filter.patient) {
        whereAnd.push({
          ['patientId']: SequelizeFilterUtils.uuid(
            filter.patient,
          ),
        });
      }

      if (filter.medicalCenter) {
        whereAnd.push({
          ['medicalCenterId']: SequelizeFilterUtils.uuid(
            filter.medicalCenter,
          ),
        });
      }

      if (filter.doctor) {
        whereAnd.push({
          ['doctorId']: SequelizeFilterUtils.uuid(
            filter.doctor,
          ),
        });
      }

      if (filter.visitDateRange) {
        const [start, end] = filter.visitDateRange;

        if (start !== undefined && start !== null && start !== '') {
          whereAnd.push({
            visitDate: {
              [Op.gte]: start,
            },
          });
        }

        if (end !== undefined && end !== null && end !== '') {
          whereAnd.push({
            visitDate: {
              [Op.lte]: end,
            },
          });
        }
      }

      if (filter.createdAtRange) {
        const [start, end] = filter.createdAtRange;

        if (
          start !== undefined &&
          start !== null &&
          start !== ''
        ) {
          whereAnd.push({
            ['createdAt']: {
              [Op.gte]: start,
            },
          });
        }

        if (
          end !== undefined &&
          end !== null &&
          end !== ''
        ) {
          whereAnd.push({
            ['createdAt']: {
              [Op.lte]: end,
            },
          });
        }
      }
    }

    const where = { [Op.and]: whereAnd };

    let {
      rows,
      count,
    } = await options.database.patientVisit.findAndCountAll({
      where,
      include,
      limit: limit ? Number(limit) : undefined,
      offset: offset ? Number(offset) : undefined,
      order: orderBy
        ? [orderBy.split('_')]
        : [['createdAt', 'DESC']],
      transaction: SequelizeRepository.getTransaction(
        options,
      ),
    });

    rows = await this._fillWithRelationsAndFilesForRows(
      rows,
      options,
    );

    return { rows, count };
  }

  /**
   * Lists the PatientVisits to populate the autocomplete.
   * See https://sequelize.org/v5/manual/querying.html to learn how to
   * customize the query.
   *
   * @param {Object} query
   * @param {number} limit
   */
  static async findAllAutocomplete(query, limit, options: IRepositoryOptions) {
    const tenant = SequelizeRepository.getCurrentTenant(
      options,
    );

    let where: any = {
      tenantId: tenant.id,
    };

    if (query) {
      where = {
        ...where,
        [Op.or]: [
          { ['id']: SequelizeFilterUtils.uuid(query) },

        ],
      };
    }

    const records = await options.database.patientVisit.findAll(
      {
        attributes: ['id', 'id'],
        where,
        limit: limit ? Number(limit) : undefined,
        orderBy: [['id', 'ASC']],
      },
    );

    return records.map((record) => ({
      id: record.id,
      label: record.id,
    }));
  }

  /**
   * Creates an audit log of the operation.
   *
   * @param {string} action - The action [create, update or delete].
   * @param {object} record - The sequelize record
   * @param {object} data - The new data passed on the request
   * @param {object} options
   */
  static async _createAuditLog(
    action,
    record,
    data,
    options: IRepositoryOptions,
  ) {
    let values = {};

    if (data) {
      values = {
        ...record.get({ plain: true }),
        prescription: data.prescription,
      };
    }

    await AuditLogRepository.log(
      {
        entityName: 'patientVisit',
        entityId: record.id,
        action,
        values,
      },
      options,
    );
  }

  /**
   * Fills an array of PatientVisit with relations and files.
   *
   * @param {Array} rows
   * @param {Object} [options]
   */
  static async _fillWithRelationsAndFilesForRows(
    rows,
    options: IRepositoryOptions,
  ) {
    if (!rows) {
      return rows;
    }

    return Promise.all(
      rows.map((record) =>
        this._fillWithRelationsAndFiles(record, options),
      ),
    );
  }

  /**
   * Fill the PatientVisit with the relations and files.
   *
   * @param {Object} record
   * @param {Object} [options]
   */
  static async _fillWithRelationsAndFiles(record, options: IRepositoryOptions) {
    if (!record) {
      return record;
    }

    const output = record.get({ plain: true });

    const transaction = SequelizeRepository.getTransaction(
      options,
    );

    output.prescription = await FileRepository.fillDownloadUrl(
      await record.getPrescription({
        transaction,
      }),
    );

    return output;
  }
}

export default PatientVisitRepository;
