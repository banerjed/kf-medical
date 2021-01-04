import list from 'src/modules/diagnosticEnum/list/diagnosticEnumListReducers';
import form from 'src/modules/diagnosticEnum/form/diagnosticEnumFormReducers';
import view from 'src/modules/diagnosticEnum/view/diagnosticEnumViewReducers';
import destroy from 'src/modules/diagnosticEnum/destroy/diagnosticEnumDestroyReducers';
import importerReducer from 'src/modules/diagnosticEnum/importer/diagnosticEnumImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
