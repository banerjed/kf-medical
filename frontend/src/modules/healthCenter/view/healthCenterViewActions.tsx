import HealthCenterService from 'src/modules/healthCenter/healthCenterService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'HEALTHCENTER_VIEW';

const healthCenterViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: healthCenterViewActions.FIND_STARTED,
      });

      const record = await HealthCenterService.find(id);

      dispatch({
        type: healthCenterViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: healthCenterViewActions.FIND_ERROR,
      });

      getHistory().push('/health-center');
    }
  },
};

export default healthCenterViewActions;
