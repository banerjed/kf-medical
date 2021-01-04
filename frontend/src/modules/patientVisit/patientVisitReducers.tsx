import list from 'src/modules/patientVisit/list/patientVisitListReducers';
import form from 'src/modules/patientVisit/form/patientVisitFormReducers';
import view from 'src/modules/patientVisit/view/patientVisitViewReducers';
import destroy from 'src/modules/patientVisit/destroy/patientVisitDestroyReducers';
import importerReducer from 'src/modules/patientVisit/importer/patientVisitImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
