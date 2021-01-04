import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.medicalHistory.fields.id'),
  },
  {
    name: 'patient',
    label: i18n('entities.medicalHistory.fields.patient'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'smoking',
    label: i18n('entities.medicalHistory.fields.smoking'),
  },
  {
    name: 'drugUse',
    label: i18n('entities.medicalHistory.fields.drugUse'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'drink',
    label: i18n('entities.medicalHistory.fields.drink'),
  },
  {
    name: 'chronicDisease1',
    label: i18n('entities.medicalHistory.fields.chronicDisease1'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'chronicDisease2',
    label: i18n('entities.medicalHistory.fields.chronicDisease2'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'chronicDisease3',
    label: i18n('entities.medicalHistory.fields.chronicDisease3'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'familyHistory',
    label: i18n('entities.medicalHistory.fields.familyHistory'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.medicalHistory.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.medicalHistory.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
