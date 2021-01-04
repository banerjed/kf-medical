import MedicineEnumService from 'src/modules/medicineEnum/medicineEnumService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'MEDICINEENUM_VIEW';

const medicineEnumViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: medicineEnumViewActions.FIND_STARTED,
      });

      const record = await MedicineEnumService.find(id);

      dispatch({
        type: medicineEnumViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: medicineEnumViewActions.FIND_ERROR,
      });

      getHistory().push('/medicine-enum');
    }
  },
};

export default medicineEnumViewActions;
