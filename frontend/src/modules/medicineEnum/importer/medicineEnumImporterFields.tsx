import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'medicineName',
    label: i18n('entities.medicineEnum.fields.medicineName'),
    schema: schemas.string(
      i18n('entities.medicineEnum.fields.medicineName'),
      {
        "required": true,
        "min": 5,
        "max": 100
      },
    ),
  },
  {
    name: 'keptInStock',
    label: i18n('entities.medicineEnum.fields.keptInStock'),
    schema: schemas.boolean(
      i18n('entities.medicineEnum.fields.keptInStock'),
      {},
    ),
  },
];