import MedicalHistoryService from 'src/modules/medicalHistory/medicalHistoryService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'MEDICALHISTORY_FORM';

const medicalHistoryFormActions = {
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
        type: medicalHistoryFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await MedicalHistoryService.find(id);
      }

      dispatch({
        type: medicalHistoryFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: medicalHistoryFormActions.INIT_ERROR,
      });

      getHistory().push('/medical-history');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: medicalHistoryFormActions.CREATE_STARTED,
      });

      await MedicalHistoryService.create(values);

      dispatch({
        type: medicalHistoryFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.medicalHistory.create.success'),
      );

      getHistory().push('/medical-history');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: medicalHistoryFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: medicalHistoryFormActions.UPDATE_STARTED,
      });

      await MedicalHistoryService.update(id, values);

      dispatch({
        type: medicalHistoryFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.medicalHistory.update.success'),
      );

      getHistory().push('/medical-history');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: medicalHistoryFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default medicalHistoryFormActions;
