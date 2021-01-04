import MedicineEnumService from 'src/modules/medicineEnum/medicineEnumService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'MEDICINEENUM_FORM';

const medicineEnumFormActions = {
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
        type: medicineEnumFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await MedicineEnumService.find(id);
      }

      dispatch({
        type: medicineEnumFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: medicineEnumFormActions.INIT_ERROR,
      });

      getHistory().push('/medicine-enum');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: medicineEnumFormActions.CREATE_STARTED,
      });

      await MedicineEnumService.create(values);

      dispatch({
        type: medicineEnumFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.medicineEnum.create.success'),
      );

      getHistory().push('/medicine-enum');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: medicineEnumFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: medicineEnumFormActions.UPDATE_STARTED,
      });

      await MedicineEnumService.update(id, values);

      dispatch({
        type: medicineEnumFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.medicineEnum.update.success'),
      );

      getHistory().push('/medicine-enum');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: medicineEnumFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default medicineEnumFormActions;
