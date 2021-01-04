import PatientVisitService from 'src/modules/patientVisit/patientVisitService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'PATIENTVISIT_FORM';

const patientVisitFormActions = {
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
        type: patientVisitFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await PatientVisitService.find(id);
      }

      dispatch({
        type: patientVisitFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: patientVisitFormActions.INIT_ERROR,
      });

      getHistory().push('/patient-visit');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: patientVisitFormActions.CREATE_STARTED,
      });

      await PatientVisitService.create(values);

      dispatch({
        type: patientVisitFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.patientVisit.create.success'),
      );

      getHistory().push('/patient-visit');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: patientVisitFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: patientVisitFormActions.UPDATE_STARTED,
      });

      await PatientVisitService.update(id, values);

      dispatch({
        type: patientVisitFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.patientVisit.update.success'),
      );

      getHistory().push('/patient-visit');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: patientVisitFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default patientVisitFormActions;
