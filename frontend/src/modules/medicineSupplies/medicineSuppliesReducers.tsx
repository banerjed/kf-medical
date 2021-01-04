import list from 'src/modules/medicineSupplies/list/medicineSuppliesListReducers';
import form from 'src/modules/medicineSupplies/form/medicineSuppliesFormReducers';
import view from 'src/modules/medicineSupplies/view/medicineSuppliesViewReducers';
import destroy from 'src/modules/medicineSupplies/destroy/medicineSuppliesDestroyReducers';
import importerReducer from 'src/modules/medicineSupplies/importer/medicineSuppliesImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
