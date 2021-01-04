import SymptomsEnumService from 'src/modules/symptomsEnum/symptomsEnumService';
import Errors from 'src/modules/shared/error/errors';
import Message from 'src/view/shared/message';
import { getHistory } from 'src/modules/store';
import { i18n } from 'src/i18n';

const prefix = 'SYMPTOMSENUM_FORM';

const symptomsEnumFormActions = {
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
        type: symptomsEnumFormActions.INIT_STARTED,
      });

      let record = {};

      const isEdit = Boolean(id);

      if (isEdit) {
        record = await SymptomsEnumService.find(id);
      }

      dispatch({
        type: symptomsEnumFormActions.INIT_SUCCESS,
        payload: record,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: symptomsEnumFormActions.INIT_ERROR,
      });

      getHistory().push('/symptoms-enum');
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: symptomsEnumFormActions.CREATE_STARTED,
      });

      await SymptomsEnumService.create(values);

      dispatch({
        type: symptomsEnumFormActions.CREATE_SUCCESS,
      });

      Message.success(
        i18n('entities.symptomsEnum.create.success'),
      );

      getHistory().push('/symptoms-enum');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: symptomsEnumFormActions.CREATE_ERROR,
      });
    }
  },

  doUpdate: (id, values) => async (dispatch, getState) => {
    try {
      dispatch({
        type: symptomsEnumFormActions.UPDATE_STARTED,
      });

      await SymptomsEnumService.update(id, values);

      dispatch({
        type: symptomsEnumFormActions.UPDATE_SUCCESS,
      });

      Message.success(
        i18n('entities.symptomsEnum.update.success'),
      );

      getHistory().push('/symptoms-enum');
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: symptomsEnumFormActions.UPDATE_ERROR,
      });
    }
  },
};

export default symptomsEnumFormActions;
