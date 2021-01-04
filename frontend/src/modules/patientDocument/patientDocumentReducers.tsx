import list from 'src/modules/patientDocument/list/patientDocumentListReducers';
import form from 'src/modules/patientDocument/form/patientDocumentFormReducers';
import view from 'src/modules/patientDocument/view/patientDocumentViewReducers';
import destroy from 'src/modules/patientDocument/destroy/patientDocumentDestroyReducers';
import importerReducer from 'src/modules/patientDocument/importer/patientDocumentImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
