import PatientVisitService from 'src/modules/patientVisit/patientVisitService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'PATIENTVISIT_VIEW';

const patientVisitViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: patientVisitViewActions.FIND_STARTED,
      });

      const record = await PatientVisitService.find(id);

      dispatch({
        type: patientVisitViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: patientVisitViewActions.FIND_ERROR,
      });

      getHistory().push('/patient-visit');
    }
  },
};

export default patientVisitViewActions;
