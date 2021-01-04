import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.symptomsEnum.fields.id'),
  },
  {
    name: 'symptomName',
    label: i18n('entities.symptomsEnum.fields.symptomName'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.symptomsEnum.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.symptomsEnum.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
