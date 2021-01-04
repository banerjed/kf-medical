import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'symptomName',
    label: i18n('entities.symptomsEnum.fields.symptomName'),
    schema: schemas.string(
      i18n('entities.symptomsEnum.fields.symptomName'),
      {
        "required": true,
        "max": 100,
        "min": 3
      },
    ),
  },
];