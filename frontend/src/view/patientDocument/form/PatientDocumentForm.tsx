import { Button, Grid } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import UndoIcon from '@material-ui/icons/Undo';
import React, { useState } from 'react';
import { i18n } from 'src/i18n';
import FormWrapper, {
  FormButtons,
} from 'src/view/shared/styles/FormWrapper';
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import { yupResolver } from '@hookform/resolvers';
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import Storage from 'src/security/storage';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';
import PatientAutocompleteFormItem from 'src/view/patient/autocomplete/PatientAutocompleteFormItem';

const schema = yup.object().shape({
  patient: yupFormSchemas.relationToOne(
    i18n('entities.patientDocument.fields.patient'),
    {},
  ),
  image: yupFormSchemas.images(
    i18n('entities.patientDocument.fields.image'),
    {
      "required": true
    },
  ),
  reportName: yupFormSchemas.string(
    i18n('entities.patientDocument.fields.reportName'),
    {
      "required": true,
      "max": 200
    },
  ),
  reportDate: yupFormSchemas.date(
    i18n('entities.patientDocument.fields.reportDate'),
    {},
  ),
});

function PatientDocumentForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      patient: record.patient,
      image: record.image || [],
      reportName: record.reportName,
      reportDate: record.reportDate ? moment(record.reportDate, 'YYYY-MM-DD') : null,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues as any,
  });

  const onSubmit = (values) => {
    props.onSubmit(props.record?.id, values);
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  const { saveLoading, modal } = props;

  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Grid spacing={2} container>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <PatientAutocompleteFormItem  
                name="patient"
                label={i18n('entities.patientDocument.fields.patient')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <ImagesFormItem
                name="image"
                label={i18n('entities.patientDocument.fields.image')}
                required={true}
                storage={Storage.values.patientDocumentImage}
                max={undefined}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="reportName"
                label={i18n('entities.patientDocument.fields.reportName')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DatePickerFormItem
                name="reportDate"
                label={i18n('entities.patientDocument.fields.reportDate')}
                required={false}
              />
            </Grid>
          </Grid>
          <FormButtons
            style={{
              flexDirection: modal
                ? 'row-reverse'
                : undefined,
            }}
          >
            <Button
              variant="contained"
              color="primary"
              disabled={saveLoading}
              type="button"
              onClick={form.handleSubmit(onSubmit)}
              startIcon={<SaveIcon />}
              size="small"
            >
              {i18n('common.save')}
            </Button>

            <Button
              disabled={saveLoading}
              onClick={onReset}
              type="button"
              startIcon={<UndoIcon />}
              size="small"
            >
              {i18n('common.reset')}
            </Button>

            {props.onCancel ? (
              <Button
                disabled={saveLoading}
                onClick={() => props.onCancel()}
                type="button"
                startIcon={<CloseIcon />}
                size="small"
              >
                {i18n('common.cancel')}
              </Button>
            ) : null}
          </FormButtons>
        </form>
      </FormProvider>
    </FormWrapper>
  );
}

export default PatientDocumentForm;
