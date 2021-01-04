import list from 'src/modules/medicineInventory/list/medicineInventoryListReducers';
import form from 'src/modules/medicineInventory/form/medicineInventoryFormReducers';
import view from 'src/modules/medicineInventory/view/medicineInventoryViewReducers';
import destroy from 'src/modules/medicineInventory/destroy/medicineInventoryDestroyReducers';
import importerReducer from 'src/modules/medicineInventory/importer/medicineInventoryImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
