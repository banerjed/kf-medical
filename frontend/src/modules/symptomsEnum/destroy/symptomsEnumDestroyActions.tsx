import listActions from 'src/modules/symptomsEnum/list/symptomsEnumListActions';
import SymptomsEnumService from 'src/modules/symptomsEnum/symptomsEnumService';
import Errors from 'src/modules/shared/error/errors';
import { i18n } from 'src/i18n';
import { getHistory } from 'src/modules/store';
import Message from 'src/view/shared/message';

const prefix = 'SYMPTOMSENUM_DESTROY';

const symptomsEnumDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: symptomsEnumDestroyActions.DESTROY_STARTED,
      });

      await SymptomsEnumService.destroyAll([id]);

      dispatch({
        type: symptomsEnumDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n('entities.symptomsEnum.destroy.success'),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/symptoms-enum');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: symptomsEnumDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: symptomsEnumDestroyActions.DESTROY_ALL_STARTED,
      });

      await SymptomsEnumService.destroyAll(ids);

      dispatch({
        type: symptomsEnumDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n('entities.symptomsEnum.destroyAll.success'),
      );

      getHistory().push('/symptoms-enum');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: symptomsEnumDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default symptomsEnumDestroyActions;
