import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.healthCenter.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.healthCenter.fields.name'),
  },
  {
    name: 'address',
    label: i18n('entities.healthCenter.fields.address'),
  },
  {
    name: 'phoneNumber',
    label: i18n('entities.healthCenter.fields.phoneNumber'),
  },
  {
    name: 'adminName',
    label: i18n('entities.healthCenter.fields.adminName'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.healthCenter.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.healthCenter.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
