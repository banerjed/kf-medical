import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.medicineSupplies.fields.id'),
  },
  {
    name: 'medicine',
    label: i18n('entities.medicineSupplies.fields.medicine'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'inventoryAddDate',
    label: i18n('entities.medicineSupplies.fields.inventoryAddDate'),
  },
  {
    name: 'count',
    label: i18n('entities.medicineSupplies.fields.count'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.medicineSupplies.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.medicineSupplies.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
