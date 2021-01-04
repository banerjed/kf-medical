import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/medicalHistory/importer/medicalHistoryImporterSelectors';
import MedicalHistoryService from 'src/modules/medicalHistory/medicalHistoryService';
import fields from 'src/modules/medicalHistory/importer/medicalHistoryImporterFields';
import { i18n } from 'src/i18n';

const medicalHistoryImporterActions = importerActions(
  'MEDICALHISTORY_IMPORTER',
  selectors,
  MedicalHistoryService.import,
  fields,
  i18n('entities.medicalHistory.importer.fileName'),
);

export default medicalHistoryImporterActions;