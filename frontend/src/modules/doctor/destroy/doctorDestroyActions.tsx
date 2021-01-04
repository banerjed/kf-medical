import listActions from 'src/modules/doctor/list/doctorListActions';
import DoctorService from 'src/modules/doctor/doctorService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'DOCTOR_DESTROY';

const doctorDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: doctorDestroyActions.DESTROY_STARTED,
      });

      await DoctorService.destroyAll([id]);

      dispatch({
        type: doctorDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.doctor.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/doctor');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: doctorDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: doctorDestroyActions.DESTROY_ALL_STARTED,
      });

      await DoctorService.destroyAll(ids);

      dispatch({
        type: doctorDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.doctor.destroyAll.success'),
      );

      getHistory().push('/doctor');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: doctorDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default doctorDestroyActions;
