import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import patientVisitEnumerators from 'src/modules/patientVisit/patientVisitEnumerators';

export default [
  {
    name: 'patient',
    label: i18n('entities.patientVisit.fields.patient'),
    schema: schemas.relationToOne(
      i18n('entities.patientVisit.fields.patient'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'medicalCenter',
    label: i18n('entities.patientVisit.fields.medicalCenter'),
    schema: schemas.relationToOne(
      i18n('entities.patientVisit.fields.medicalCenter'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'doctor',
    label: i18n('entities.patientVisit.fields.doctor'),
    schema: schemas.relationToOne(
      i18n('entities.patientVisit.fields.doctor'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'visitDate',
    label: i18n('entities.patientVisit.fields.visitDate'),
    schema: schemas.date(
      i18n('entities.patientVisit.fields.visitDate'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'symptom1',
    label: i18n('entities.patientVisit.fields.symptom1'),
    schema: schemas.relationToOne(
      i18n('entities.patientVisit.fields.symptom1'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'symptom2',
    label: i18n('entities.patientVisit.fields.symptom2'),
    schema: schemas.relationToOne(
      i18n('entities.patientVisit.fields.symptom2'),
      {},
    ),
  },
  {
    name: 'symptom3',
    label: i18n('entities.patientVisit.fields.symptom3'),
    schema: schemas.relationToOne(
      i18n('entities.patientVisit.fields.symptom3'),
      {},
    ),
  },
  {
    name: 'otherSymptoms',
    label: i18n('entities.patientVisit.fields.otherSymptoms'),
    schema: schemas.string(
      i18n('entities.patientVisit.fields.otherSymptoms'),
      {},
    ),
  },
  {
    name: 'vitalStatistics',
    label: i18n('entities.patientVisit.fields.vitalStatistics'),
    schema: schemas.string(
      i18n('entities.patientVisit.fields.vitalStatistics'),
      {},
    ),
  },
  {
    name: 'diagnosis',
    label: i18n('entities.patientVisit.fields.diagnosis'),
    schema: schemas.string(
      i18n('entities.patientVisit.fields.diagnosis'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'requestedLabs',
    label: i18n('entities.patientVisit.fields.requestedLabs'),
    schema: schemas.string(
      i18n('entities.patientVisit.fields.requestedLabs'),
      {},
    ),
  },
  {
    name: 'medicine1',
    label: i18n('entities.patientVisit.fields.medicine1'),
    schema: schemas.relationToOne(
      i18n('entities.patientVisit.fields.medicine1'),
      {},
    ),
  },
  {
    name: 'med1Qty',
    label: i18n('entities.patientVisit.fields.med1Qty'),
    schema: schemas.integer(
      i18n('entities.patientVisit.fields.med1Qty'),
      {},
    ),
  },
  {
    name: 'medicine2',
    label: i18n('entities.patientVisit.fields.medicine2'),
    schema: schemas.relationToOne(
      i18n('entities.patientVisit.fields.medicine2'),
      {},
    ),
  },
  {
    name: 'med2Qty',
    label: i18n('entities.patientVisit.fields.med2Qty'),
    schema: schemas.integer(
      i18n('entities.patientVisit.fields.med2Qty'),
      {},
    ),
  },
  {
    name: 'medicine3',
    label: i18n('entities.patientVisit.fields.medicine3'),
    schema: schemas.relationToOne(
      i18n('entities.patientVisit.fields.medicine3'),
      {},
    ),
  },
  {
    name: 'med3Qty',
    label: i18n('entities.patientVisit.fields.med3Qty'),
    schema: schemas.integer(
      i18n('entities.patientVisit.fields.med3Qty'),
      {},
    ),
  },
  {
    name: 'medicine4',
    label: i18n('entities.patientVisit.fields.medicine4'),
    schema: schemas.relationToOne(
      i18n('entities.patientVisit.fields.medicine4'),
      {},
    ),
  },
  {
    name: 'med4Qty',
    label: i18n('entities.patientVisit.fields.med4Qty'),
    schema: schemas.integer(
      i18n('entities.patientVisit.fields.med4Qty'),
      {},
    ),
  },
  {
    name: 'medicineInstructions',
    label: i18n('entities.patientVisit.fields.medicineInstructions'),
    schema: schemas.string(
      i18n('entities.patientVisit.fields.medicineInstructions'),
      {},
    ),
  },
  {
    name: 'referralLab',
    label: i18n('entities.patientVisit.fields.referralLab'),
    schema: schemas.string(
      i18n('entities.patientVisit.fields.referralLab'),
      {},
    ),
  },
  {
    name: 'referralHospital',
    label: i18n('entities.patientVisit.fields.referralHospital'),
    schema: schemas.string(
      i18n('entities.patientVisit.fields.referralHospital'),
      {},
    ),
  },
  {
    name: 'referredDoctor',
    label: i18n('entities.patientVisit.fields.referredDoctor'),
    schema: schemas.string(
      i18n('entities.patientVisit.fields.referredDoctor'),
      {},
    ),
  },
  {
    name: 'returnIn',
    label: i18n('entities.patientVisit.fields.returnIn'),
    schema: schemas.enumerator(
      i18n('entities.patientVisit.fields.returnIn'),
      {
        "options": patientVisitEnumerators.returnIn
      },
    ),
  },
  {
    name: 'prescription',
    label: i18n('entities.patientVisit.fields.prescription'),
    schema: schemas.images(
      i18n('entities.patientVisit.fields.prescription'),
      {},
    ),
  },
  {
    name: 'patientCopay',
    label: i18n('entities.patientVisit.fields.patientCopay'),
    schema: schemas.integer(
      i18n('entities.patientVisit.fields.patientCopay'),
      {},
    ),
  },
];