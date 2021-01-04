import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/patientDocument/importer/patientDocumentImporterSelectors';
import PatientDocumentService from 'src/modules/patientDocument/patientDocumentService';
import fields from 'src/modules/patientDocument/importer/patientDocumentImporterFields';
import { i18n } from 'src/i18n';

const patientDocumentImporterActions = importerActions(
  'PATIENTDOCUMENT_IMPORTER',
  selectors,
  PatientDocumentService.import,
  fields,
  i18n('entities.patientDocument.importer.fileName'),
);

export default patientDocumentImporterActions;