import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/patientVisit/importer/patientVisitImporterSelectors';
import PatientVisitService from 'src/modules/patientVisit/patientVisitService';
import fields from 'src/modules/patientVisit/importer/patientVisitImporterFields';
import { i18n } from 'src/i18n';

const patientVisitImporterActions = importerActions(
  'PATIENTVISIT_IMPORTER',
  selectors,
  PatientVisitService.import,
  fields,
  i18n('entities.patientVisit.importer.fileName'),
);

export default patientVisitImporterActions;