import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'medicine',
    label: i18n('entities.medicineSupplies.fields.medicine'),
    schema: schemas.relationToOne(
      i18n('entities.medicineSupplies.fields.medicine'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'inventoryAddDate',
    label: i18n('entities.medicineSupplies.fields.inventoryAddDate'),
    schema: schemas.date(
      i18n('entities.medicineSupplies.fields.inventoryAddDate'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'count',
    label: i18n('entities.medicineSupplies.fields.count'),
    schema: schemas.integer(
      i18n('entities.medicineSupplies.fields.count'),
      {
        "required": true
      },
    ),
  },
];