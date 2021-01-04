import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'patient',
    label: i18n('entities.patientDocument.fields.patient'),
    schema: schemas.relationToOne(
      i18n('entities.patientDocument.fields.patient'),
      {},
    ),
  },
  {
    name: 'image',
    label: i18n('entities.patientDocument.fields.image'),
    schema: schemas.images(
      i18n('entities.patientDocument.fields.image'),
      {
        "required": true
      },
    ),
  },
  {
    name: 'reportName',
    label: i18n('entities.patientDocument.fields.reportName'),
    schema: schemas.string(
      i18n('entities.patientDocument.fields.reportName'),
      {
        "required": true,
        "max": 200
      },
    ),
  },
  {
    name: 'reportDate',
    label: i18n('entities.patientDocument.fields.reportDate'),
    schema: schemas.date(
      i18n('entities.patientDocument.fields.reportDate'),
      {},
    ),
  },
];