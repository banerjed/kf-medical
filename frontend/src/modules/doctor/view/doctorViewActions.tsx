import DoctorService from 'src/modules/doctor/doctorService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'DOCTOR_VIEW';

const doctorViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: doctorViewActions.FIND_STARTED,
      });

      const record = await DoctorService.find(id);

      dispatch({
        type: doctorViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: doctorViewActions.FIND_ERROR,
      });

      getHistory().push('/doctor');
    }
  },
};

export default doctorViewActions;
