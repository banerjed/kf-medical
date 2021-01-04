import listActions from 'src/modules/healthCenter/list/healthCenterListActions';
import HealthCenterService from 'src/modules/healthCenter/healthCenterService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'HEALTHCENTER_DESTROY';

const healthCenterDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: healthCenterDestroyActions.DESTROY_STARTED,
      });

      await HealthCenterService.destroyAll([id]);

      dispatch({
        type: healthCenterDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.healthCenter.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/health-center');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: healthCenterDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: healthCenterDestroyActions.DESTROY_ALL_STARTED,
      });

      await HealthCenterService.destroyAll(ids);

      dispatch({
        type: healthCenterDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.healthCenter.destroyAll.success'),
      );

      getHistory().push('/health-center');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: healthCenterDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default healthCenterDestroyActions;
