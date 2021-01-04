import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/medicineSupplies/importer/medicineSuppliesImporterSelectors';
import MedicineSuppliesService from 'src/modules/medicineSupplies/medicineSuppliesService';
import fields from 'src/modules/medicineSupplies/importer/medicineSuppliesImporterFields';
import { i18n } from 'src/i18n';

const medicineSuppliesImporterActions = importerActions(
  'MEDICINESUPPLIES_IMPORTER',
  selectors,
  MedicineSuppliesService.import,
  fields,
  i18n('entities.medicineSupplies.importer.fileName'),
);

export default medicineSuppliesImporterActions;