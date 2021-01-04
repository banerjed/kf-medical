import list from 'src/modules/medicalHistory/list/medicalHistoryListReducers';
import form from 'src/modules/medicalHistory/form/medicalHistoryFormReducers';
import view from 'src/modules/medicalHistory/view/medicalHistoryViewReducers';
import destroy from 'src/modules/medicalHistory/destroy/medicalHistoryDestroyReducers';
import importerReducer from 'src/modules/medicalHistory/importer/medicalHistoryImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
