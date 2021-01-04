import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/diagnosticEnum/importer/diagnosticEnumImporterSelectors';
import DiagnosticEnumService from 'src/modules/diagnosticEnum/diagnosticEnumService';
import fields from 'src/modules/diagnosticEnum/importer/diagnosticEnumImporterFields';
import { i18n } from 'src/i18n';

const diagnosticEnumImporterActions = importerActions(
  'DIAGNOSTICENUM_IMPORTER',
  selectors,
  DiagnosticEnumService.import,
  fields,
  i18n('entities.diagnosticEnum.importer.fileName'),
);

export default diagnosticEnumImporterActions;