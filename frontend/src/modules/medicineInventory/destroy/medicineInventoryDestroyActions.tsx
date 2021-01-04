import listActions from 'src/modules/medicineInventory/list/medicineInventoryListActions';
import MedicineInventoryService from 'src/modules/medicineInventory/medicineInventoryService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'MEDICINEINVENTORY_DESTROY';

const medicineInventoryDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: medicineInventoryDestroyActions.DESTROY_STARTED,
      });

      await MedicineInventoryService.destroyAll([id]);

      dispatch({
        type: medicineInventoryDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.medicineInventory.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/medicine-inventory');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: medicineInventoryDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: medicineInventoryDestroyActions.DESTROY_ALL_STARTED,
      });

      await MedicineInventoryService.destroyAll(ids);

      dispatch({
        type: medicineInventoryDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.medicineInventory.destroyAll.success'),
      );

      getHistory().push('/medicine-inventory');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: medicineInventoryDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default medicineInventoryDestroyActions;
