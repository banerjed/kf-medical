import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';
import medicalHistoryEnumerators from 'src/modules/medicalHistory/medicalHistoryEnumerators';

export default [
  {
    name: 'patient',
    label: i18n('entities.medicalHistory.fields.patient'),
    schema: schemas.relationToOne(
      i18n('entities.medicalHistory.fields.patient'),
      {},
    ),
  },
  {
    name: 'smoking',
    label: i18n('entities.medicalHistory.fields.smoking'),
    schema: schemas.enumerator(
      i18n('entities.medicalHistory.fields.smoking'),
      {
        "options": medicalHistoryEnumerators.smoking
      },
    ),
  },
  {
    name: 'drugUse',
    label: i18n('entities.medicalHistory.fields.drugUse'),
    schema: schemas.boolean(
      i18n('entities.medicalHistory.fields.drugUse'),
      {},
    ),
  },
  {
    name: 'drink',
    label: i18n('entities.medicalHistory.fields.drink'),
    schema: schemas.enumerator(
      i18n('entities.medicalHistory.fields.drink'),
      {
        "options": medicalHistoryEnumerators.drink
      },
    ),
  },
  {
    name: 'chronicDisease1',
    label: i18n('entities.medicalHistory.fields.chronicDisease1'),
    schema: schemas.relationToOne(
      i18n('entities.medicalHistory.fields.chronicDisease1'),
      {},
    ),
  },
  {
    name: 'chronicDisease2',
    label: i18n('entities.medicalHistory.fields.chronicDisease2'),
    schema: schemas.relationToOne(
      i18n('entities.medicalHistory.fields.chronicDisease2'),
      {},
    ),
  },
  {
    name: 'chronicDisease3',
    label: i18n('entities.medicalHistory.fields.chronicDisease3'),
    schema: schemas.relationToOne(
      i18n('entities.medicalHistory.fields.chronicDisease3'),
      {},
    ),
  },
  {
    name: 'familyHistory',
    label: i18n('entities.medicalHistory.fields.familyHistory'),
    schema: schemas.string(
      i18n('entities.medicalHistory.fields.familyHistory'),
      {},
    ),
  },
];