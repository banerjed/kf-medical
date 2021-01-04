import list from 'src/modules/doctor/list/doctorListReducers';
import form from 'src/modules/doctor/form/doctorFormReducers';
import view from 'src/modules/doctor/view/doctorViewReducers';
import destroy from 'src/modules/doctor/destroy/doctorDestroyReducers';
import importerReducer from 'src/modules/doctor/importer/doctorImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
