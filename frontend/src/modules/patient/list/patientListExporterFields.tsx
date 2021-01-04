import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.patient.fields.id'),
  },
  {
    name: 'firstName',
    label: i18n('entities.patient.fields.firstName'),
  },
  {
    name: 'middleName',
    label: i18n('entities.patient.fields.middleName'),
  },
  {
    name: 'lastName',
    label: i18n('entities.patient.fields.lastName'),
  },
  {
    name: 'fullName',
    label: i18n('entities.patient.fields.fullName'),
  },
  {
    name: 'gender',
    label: i18n('entities.patient.fields.gender'),
  },
  {
    name: 'age',
    label: i18n('entities.patient.fields.age'),
  },
  {
    name: 'localityName',
    label: i18n('entities.patient.fields.localityName'),
  },
  {
    name: 'mobileNumber',
    label: i18n('entities.patient.fields.mobileNumber'),
  },
  {
    name: 'aadharNumber',
    label: i18n('entities.patient.fields.aadharNumber'),
  },
  {
    name: 'dateOfBirth',
    label: i18n('entities.patient.fields.dateOfBirth'),
  },
  {
    name: 'picture',
    label: i18n('entities.patient.fields.picture'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'medicalHistory',
    label: i18n('entities.patient.fields.medicalHistory'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'medicalVisits',
    label: i18n('entities.patient.fields.medicalVisits'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'medicalDocs',
    label: i18n('entities.patient.fields.medicalDocs'),
    render: exporterRenders.relationToMany(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.patient.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.patient.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
