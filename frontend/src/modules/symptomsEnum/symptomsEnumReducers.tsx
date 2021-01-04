import list from 'src/modules/symptomsEnum/list/symptomsEnumListReducers';
import form from 'src/modules/symptomsEnum/form/symptomsEnumFormReducers';
import view from 'src/modules/symptomsEnum/view/symptomsEnumViewReducers';
import destroy from 'src/modules/symptomsEnum/destroy/symptomsEnumDestroyReducers';
import importerReducer from 'src/modules/symptomsEnum/importer/symptomsEnumImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
