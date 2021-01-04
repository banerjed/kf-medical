import list from 'src/modules/medicineEnum/list/medicineEnumListReducers';
import form from 'src/modules/medicineEnum/form/medicineEnumFormReducers';
import view from 'src/modules/medicineEnum/view/medicineEnumViewReducers';
import destroy from 'src/modules/medicineEnum/destroy/medicineEnumDestroyReducers';
import importerReducer from 'src/modules/medicineEnum/importer/medicineEnumImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
