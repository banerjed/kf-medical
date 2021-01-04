import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.diagnosticEnum.fields.id'),
  },
  {
    name: 'diagnosticName',
    label: i18n('entities.diagnosticEnum.fields.diagnosticName'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.diagnosticEnum.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.diagnosticEnum.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
