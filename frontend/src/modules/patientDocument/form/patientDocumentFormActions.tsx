import PatientDocumentService from 'src/modules/patientDocument/patientDocumentService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'PATIENTDOCUMENT_FORM';

const patientDocumentFormActions = {
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
        type: patientDocumentFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await PatientDocumentService.find(id);
      }

      dispatch({
        type: patientDocumentFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: patientDocumentFormActions.INIT_ERROR,
      });

      getHistory().push('/patient-document');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: patientDocumentFormActions.CREATE_STARTED,
      });

      await PatientDocumentService.create(values);

      dispatch({
        type: patientDocumentFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.patientDocument.create.success'),
      );

      getHistory().push('/patient-document');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: patientDocumentFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: patientDocumentFormActions.UPDATE_STARTED,
      });

      await PatientDocumentService.update(id, values);

      dispatch({
        type: patientDocumentFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.patientDocument.update.success'),
      );

      getHistory().push('/patient-document');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: patientDocumentFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default patientDocumentFormActions;
