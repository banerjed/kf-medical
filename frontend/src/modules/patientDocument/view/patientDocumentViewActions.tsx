import PatientDocumentService from 'src/modules/patientDocument/patientDocumentService';
import Errors from 'src/modules/shared/error/errors';
import { getHistory } from 'src/modules/store';

const prefix = 'PATIENTDOCUMENT_VIEW';

const patientDocumentViewActions = {
  FIND_STARTED: `${prefix}_FIND_STARTED`,
  FIND_SUCCESS: `${prefix}_FIND_SUCCESS`,
  FIND_ERROR: `${prefix}_FIND_ERROR`,

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: patientDocumentViewActions.FIND_STARTED,
      });

      const record = await PatientDocumentService.find(id);

      dispatch({
        type: patientDocumentViewActions.FIND_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: patientDocumentViewActions.FIND_ERROR,
      });

      getHistory().push('/patient-document');
    }
  },
};

export default patientDocumentViewActions;
