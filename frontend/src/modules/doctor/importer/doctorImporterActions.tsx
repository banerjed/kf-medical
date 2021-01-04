import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/doctor/importer/doctorImporterSelectors';
import DoctorService from 'src/modules/doctor/doctorService';
import fields from 'src/modules/doctor/importer/doctorImporterFields';
import { i18n } from 'src/i18n';

const doctorImporterActions = importerActions(
  'DOCTOR_IMPORTER',
  selectors,
  DoctorService.import,
  fields,
  i18n('entities.doctor.importer.fileName'),
);

export default doctorImporterActions;