import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.doctor.fields.name'),
    schema: schemas.string(
      i18n('entities.doctor.fields.name'),
      {
        "required": true,
        "max": 100,
        "min": 5
      },
    ),
  },
  {
    name: 'specialization',
    label: i18n('entities.doctor.fields.specialization'),
    schema: schemas.string(
      i18n('entities.doctor.fields.specialization'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'user',
    label: i18n('entities.doctor.fields.user'),
    schema: schemas.relationToOne(
      i18n('entities.doctor.fields.user'),
      {},
    ),
  },
  {
    name: 'phone',
    label: i18n('entities.doctor.fields.phone'),
    schema: schemas.string(
      i18n('entities.doctor.fields.phone'),
      {},
    ),
  },
];