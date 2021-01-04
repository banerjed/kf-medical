import listActions from 'src/modules/medicalHistory/list/medicalHistoryListActions';
import MedicalHistoryService from 'src/modules/medicalHistory/medicalHistoryService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'MEDICALHISTORY_DESTROY';

const medicalHistoryDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: medicalHistoryDestroyActions.DESTROY_STARTED,
      });

      await MedicalHistoryService.destroyAll([id]);

      dispatch({
        type: medicalHistoryDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.medicalHistory.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/medical-history');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: medicalHistoryDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: medicalHistoryDestroyActions.DESTROY_ALL_STARTED,
      });

      await MedicalHistoryService.destroyAll(ids);

      dispatch({
        type: medicalHistoryDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.medicalHistory.destroyAll.success'),
      );

      getHistory().push('/medical-history');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: medicalHistoryDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default medicalHistoryDestroyActions;
