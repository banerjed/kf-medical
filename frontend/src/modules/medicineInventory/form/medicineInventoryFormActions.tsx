import MedicineInventoryService from 'src/modules/medicineInventory/medicineInventoryService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'MEDICINEINVENTORY_FORM';

const medicineInventoryFormActions = {
  INIT_STARTED: `${prefix}_INIT_STARTED`,
  INIT_SUCCESS: `${prefix}_INIT_SUCCESS`,
  INIT_ERROR: `${prefix}_INIT_ERROR`,

  CREATE_STARTED: `${prefix}_CREATE_STARTED`,
  CREATE_SUCCESS: `${prefix}_CREATE_SUCCESS`,
  CREATE_ERROR: `${prefix}_CREATE_ERROR`,

  UPDATE_STARTED: `${prefix}_UPDATE_STARTED`,
  UPDATE_SUCCESS: `${prefix}_UPDATE_SUCCESS`,
  UPDATE_ERROR: `${prefix}_UPDATE_ERROR`,

  doInit: (id) => async (dispatch) => {
    try {
      dispatch({
        type: medicineInventoryFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await MedicineInventoryService.find(id);
      }

      dispatch({
        type: medicineInventoryFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: medicineInventoryFormActions.INIT_ERROR,
      });

      getHistory().push('/medicine-inventory');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: medicineInventoryFormActions.CREATE_STARTED,
      });

      await MedicineInventoryService.create(values);

      dispatch({
        type: medicineInventoryFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.medicineInventory.create.success'),
      );

      getHistory().push('/medicine-inventory');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: medicineInventoryFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: medicineInventoryFormActions.UPDATE_STARTED,
      });

      await MedicineInventoryService.update(id, values);

      dispatch({
        type: medicineInventoryFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.medicineInventory.update.success'),
      );

      getHistory().push('/medicine-inventory');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: medicineInventoryFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default medicineInventoryFormActions;
