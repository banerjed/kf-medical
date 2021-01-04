import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'diseaseName',
    label: i18n('entities.chronicDiseaseEnum.fields.diseaseName'),
    schema: schemas.string(
      i18n('entities.chronicDiseaseEnum.fields.diseaseName'),
      {
        "required": true,
        "min": 2,
        "max": 100
      },
    ),
  },
];