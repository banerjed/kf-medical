import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.patientDocument.fields.id'),
  },
  {
    name: 'patient',
    label: i18n('entities.patientDocument.fields.patient'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'image',
    label: i18n('entities.patientDocument.fields.image'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'reportName',
    label: i18n('entities.patientDocument.fields.reportName'),
  },
  {
    name: 'reportDate',
    label: i18n('entities.patientDocument.fields.reportDate'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.patientDocument.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.patientDocument.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
