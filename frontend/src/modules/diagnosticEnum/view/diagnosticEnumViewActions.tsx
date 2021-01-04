import DiagnosticEnumService from 'src/modules/diagnosticEnum/diagnosticEnumService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'DIAGNOSTICENUM_VIEW';

const diagnosticEnumViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: diagnosticEnumViewActions.FIND_STARTED,
      });

      const record = await DiagnosticEnumService.find(id);

      dispatch({
        type: diagnosticEnumViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: diagnosticEnumViewActions.FIND_ERROR,
      });

      getHistory().push('/diagnostic-enum');
    }
  },
};

export default diagnosticEnumViewActions;
