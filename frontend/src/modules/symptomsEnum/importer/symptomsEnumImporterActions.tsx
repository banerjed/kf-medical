import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/symptomsEnum/importer/symptomsEnumImporterSelectors';
import SymptomsEnumService from 'src/modules/symptomsEnum/symptomsEnumService';
import fields from 'src/modules/symptomsEnum/importer/symptomsEnumImporterFields';
import { i18n } from 'src/i18n';

const symptomsEnumImporterActions = importerActions(
  'SYMPTOMSENUM_IMPORTER',
  selectors,
  SymptomsEnumService.import,
  fields,
  i18n('entities.symptomsEnum.importer.fileName'),
);

export default symptomsEnumImporterActions;