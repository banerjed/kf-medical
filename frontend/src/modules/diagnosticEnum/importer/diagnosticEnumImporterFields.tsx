import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'diagnosticName',
    label: i18n('entities.diagnosticEnum.fields.diagnosticName'),
    schema: schemas.string(
      i18n('entities.diagnosticEnum.fields.diagnosticName'),
      {
        "required": true,
        "min": 3,
        "max": 100
      },
    ),
  },
];