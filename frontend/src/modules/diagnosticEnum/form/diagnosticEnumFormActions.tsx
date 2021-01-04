import DiagnosticEnumService from 'src/modules/diagnosticEnum/diagnosticEnumService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'DIAGNOSTICENUM_FORM';

const diagnosticEnumFormActions = {
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
        type: diagnosticEnumFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await DiagnosticEnumService.find(id);
      }

      dispatch({
        type: diagnosticEnumFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: diagnosticEnumFormActions.INIT_ERROR,
      });

      getHistory().push('/diagnostic-enum');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: diagnosticEnumFormActions.CREATE_STARTED,
      });

      await DiagnosticEnumService.create(values);

      dispatch({
        type: diagnosticEnumFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.diagnosticEnum.create.success'),
      );

      getHistory().push('/diagnostic-enum');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: diagnosticEnumFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: diagnosticEnumFormActions.UPDATE_STARTED,
      });

      await DiagnosticEnumService.update(id, values);

      dispatch({
        type: diagnosticEnumFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.diagnosticEnum.update.success'),
      );

      getHistory().push('/diagnostic-enum');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: diagnosticEnumFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default diagnosticEnumFormActions;
