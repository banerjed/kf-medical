import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.doctor.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.doctor.fields.name'),
  },
  {
    name: 'specialization',
    label: i18n('entities.doctor.fields.specialization'),
  },
  {
    name: 'user',
    label: i18n('entities.doctor.fields.user'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'phone',
    label: i18n('entities.doctor.fields.phone'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.doctor.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.doctor.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
