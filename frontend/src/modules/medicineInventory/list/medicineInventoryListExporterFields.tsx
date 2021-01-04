import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.medicineInventory.fields.id'),
  },
  {
    name: 'medicine',
    label: i18n('entities.medicineInventory.fields.medicine'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'inventoryDate',
    label: i18n('entities.medicineInventory.fields.inventoryDate'),
  },
  {
    name: 'count',
    label: i18n('entities.medicineInventory.fields.count'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.medicineInventory.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.medicineInventory.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
