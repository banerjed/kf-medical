import listActions from 'src/modules/diagnosticEnum/list/diagnosticEnumListActions';
import DiagnosticEnumService from 'src/modules/diagnosticEnum/diagnosticEnumService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'DIAGNOSTICENUM_DESTROY';

const diagnosticEnumDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: diagnosticEnumDestroyActions.DESTROY_STARTED,
      });

      await DiagnosticEnumService.destroyAll([id]);

      dispatch({
        type: diagnosticEnumDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.diagnosticEnum.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/diagnostic-enum');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: diagnosticEnumDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: diagnosticEnumDestroyActions.DESTROY_ALL_STARTED,
      });

      await DiagnosticEnumService.destroyAll(ids);

      dispatch({
        type: diagnosticEnumDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.diagnosticEnum.destroyAll.success'),
      );

      getHistory().push('/diagnostic-enum');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: diagnosticEnumDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default diagnosticEnumDestroyActions;
