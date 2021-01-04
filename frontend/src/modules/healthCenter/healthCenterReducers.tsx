import list from 'src/modules/healthCenter/list/healthCenterListReducers';
import form from 'src/modules/healthCenter/form/healthCenterFormReducers';
import view from 'src/modules/healthCenter/view/healthCenterViewReducers';
import destroy from 'src/modules/healthCenter/destroy/healthCenterDestroyReducers';
import importerReducer from 'src/modules/healthCenter/importer/healthCenterImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
