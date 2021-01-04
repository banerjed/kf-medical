import MedicineInventoryService from 'src/modules/medicineInventory/medicineInventoryService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'MEDICINEINVENTORY_VIEW';

const medicineInventoryViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: medicineInventoryViewActions.FIND_STARTED,
      });

      const record = await MedicineInventoryService.find(id);

      dispatch({
        type: medicineInventoryViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: medicineInventoryViewActions.FIND_ERROR,
      });

      getHistory().push('/medicine-inventory');
    }
  },
};

export default medicineInventoryViewActions;
