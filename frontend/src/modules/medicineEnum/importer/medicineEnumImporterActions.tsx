import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/medicineEnum/importer/medicineEnumImporterSelectors';
import MedicineEnumService from 'src/modules/medicineEnum/medicineEnumService';
import fields from 'src/modules/medicineEnum/importer/medicineEnumImporterFields';
import { i18n } from 'src/i18n';

const medicineEnumImporterActions = importerActions(
  'MEDICINEENUM_IMPORTER',
  selectors,
  MedicineEnumService.import,
  fields,
  i18n('entities.medicineEnum.importer.fileName'),
);

export default medicineEnumImporterActions;