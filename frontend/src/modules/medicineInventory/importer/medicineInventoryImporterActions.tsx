import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/medicineInventory/importer/medicineInventoryImporterSelectors';
import MedicineInventoryService from 'src/modules/medicineInventory/medicineInventoryService';
import fields from 'src/modules/medicineInventory/importer/medicineInventoryImporterFields';
import { i18n } from 'src/i18n';

const medicineInventoryImporterActions = importerActions(
  'MEDICINEINVENTORY_IMPORTER',
  selectors,
  MedicineInventoryService.import,
  fields,
  i18n('entities.medicineInventory.importer.fileName'),
);

export default medicineInventoryImporterActions;