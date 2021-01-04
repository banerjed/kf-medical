import SymptomsEnumService from 'src/modules/symptomsEnum/symptomsEnumService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'SYMPTOMSENUM_VIEW';

const symptomsEnumViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: symptomsEnumViewActions.FIND_STARTED,
      });

      const record = await SymptomsEnumService.find(id);

      dispatch({
        type: symptomsEnumViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: symptomsEnumViewActions.FIND_ERROR,
      });

      getHistory().push('/symptoms-enum');
    }
  },
};

export default symptomsEnumViewActions;
