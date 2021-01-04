import listActions from 'src/modules/medicineEnum/list/medicineEnumListActions';
import MedicineEnumService from 'src/modules/medicineEnum/medicineEnumService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'MEDICINEENUM_DESTROY';

const medicineEnumDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: medicineEnumDestroyActions.DESTROY_STARTED,
      });

      await MedicineEnumService.destroyAll([id]);

      dispatch({
        type: medicineEnumDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.medicineEnum.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/medicine-enum');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: medicineEnumDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: medicineEnumDestroyActions.DESTROY_ALL_STARTED,
      });

      await MedicineEnumService.destroyAll(ids);

      dispatch({
        type: medicineEnumDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.medicineEnum.destroyAll.success'),
      );

      getHistory().push('/medicine-enum');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: medicineEnumDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default medicineEnumDestroyActions;
