import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/healthCenter/importer/healthCenterImporterSelectors';
import HealthCenterService from 'src/modules/healthCenter/healthCenterService';
import fields from 'src/modules/healthCenter/importer/healthCenterImporterFields';
import { i18n } from 'src/i18n';

const healthCenterImporterActions = importerActions(
  'HEALTHCENTER_IMPORTER',
  selectors,
  HealthCenterService.import,
  fields,
  i18n('entities.healthCenter.importer.fileName'),
);

export default healthCenterImporterActions;