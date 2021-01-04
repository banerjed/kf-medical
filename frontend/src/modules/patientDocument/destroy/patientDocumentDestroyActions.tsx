import listActions from 'src/modules/patientDocument/list/patientDocumentListActions';
import PatientDocumentService from 'src/modules/patientDocument/patientDocumentService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'PATIENTDOCUMENT_DESTROY';

const patientDocumentDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: patientDocumentDestroyActions.DESTROY_STARTED,
      });

      await PatientDocumentService.destroyAll([id]);

      dispatch({
        type: patientDocumentDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.patientDocument.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/patient-document');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: patientDocumentDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: patientDocumentDestroyActions.DESTROY_ALL_STARTED,
      });

      await PatientDocumentService.destroyAll(ids);

      dispatch({
        type: patientDocumentDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.patientDocument.destroyAll.success'),
      );

      getHistory().push('/patient-document');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: patientDocumentDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default patientDocumentDestroyActions;
