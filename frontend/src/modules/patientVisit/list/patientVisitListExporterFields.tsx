import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.patientVisit.fields.id'),
  },
  {
    name: 'patient',
    label: i18n('entities.patientVisit.fields.patient'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'medicalCenter',
    label: i18n('entities.patientVisit.fields.medicalCenter'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'doctor',
    label: i18n('entities.patientVisit.fields.doctor'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'visitDate',
    label: i18n('entities.patientVisit.fields.visitDate'),
  },
  {
    name: 'symptom1',
    label: i18n('entities.patientVisit.fields.symptom1'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'symptom2',
    label: i18n('entities.patientVisit.fields.symptom2'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'symptom3',
    label: i18n('entities.patientVisit.fields.symptom3'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'otherSymptoms',
    label: i18n('entities.patientVisit.fields.otherSymptoms'),
  },
  {
    name: 'vitalStatistics',
    label: i18n('entities.patientVisit.fields.vitalStatistics'),
  },
  {
    name: 'diagnosis',
    label: i18n('entities.patientVisit.fields.diagnosis'),
  },
  {
    name: 'requestedLabs',
    label: i18n('entities.patientVisit.fields.requestedLabs'),
  },
  {
    name: 'medicine1',
    label: i18n('entities.patientVisit.fields.medicine1'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'med1Qty',
    label: i18n('entities.patientVisit.fields.med1Qty'),
  },
  {
    name: 'medicine2',
    label: i18n('entities.patientVisit.fields.medicine2'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'med2Qty',
    label: i18n('entities.patientVisit.fields.med2Qty'),
  },
  {
    name: 'medicine3',
    label: i18n('entities.patientVisit.fields.medicine3'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'med3Qty',
    label: i18n('entities.patientVisit.fields.med3Qty'),
  },
  {
    name: 'medicine4',
    label: i18n('entities.patientVisit.fields.medicine4'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'med4Qty',
    label: i18n('entities.patientVisit.fields.med4Qty'),
  },
  {
    name: 'medicineInstructions',
    label: i18n('entities.patientVisit.fields.medicineInstructions'),
  },
  {
    name: 'referralLab',
    label: i18n('entities.patientVisit.fields.referralLab'),
  },
  {
    name: 'referralHospital',
    label: i18n('entities.patientVisit.fields.referralHospital'),
  },
  {
    name: 'referredDoctor',
    label: i18n('entities.patientVisit.fields.referredDoctor'),
  },
  {
    name: 'returnIn',
    label: i18n('entities.patientVisit.fields.returnIn'),
  },
  {
    name: 'prescription',
    label: i18n('entities.patientVisit.fields.prescription'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'patientCopay',
    label: i18n('entities.patientVisit.fields.patientCopay'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.patientVisit.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.patientVisit.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
