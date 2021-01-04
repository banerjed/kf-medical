import MedicineSuppliesService from 'src/modules/medicineSupplies/medicineSuppliesService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'MEDICINESUPPLIES_VIEW';

const medicineSuppliesViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: medicineSuppliesViewActions.FIND_STARTED,
      });

      const record = await MedicineSuppliesService.find(id);

      dispatch({
        type: medicineSuppliesViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: medicineSuppliesViewActions.FIND_ERROR,
      });

      getHistory().push('/medicine-supplies');
    }
  },
};

export default medicineSuppliesViewActions;
