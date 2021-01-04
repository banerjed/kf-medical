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
import InputNumberFormItem from 'src/view/shared/form/items/InputNumberFormItem';
import RadioFormItem from 'src/view/shared/form/items/RadioFormItem';
import patientEnumerators from 'src/modules/patient/patientEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import Storage from 'src/security/storage';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';
import MedicalHistoryAutocompleteFormItem from 'src/view/medicalHistory/autocomplete/MedicalHistoryAutocompleteFormItem';
import PatientVisitAutocompleteFormItem from 'src/view/patientVisit/autocomplete/PatientVisitAutocompleteFormItem';
import PatientDocumentAutocompleteFormItem from 'src/view/patientDocument/autocomplete/PatientDocumentAutocompleteFormItem';

const schema = yup.object().shape({
  firstName: yupFormSchemas.string(
    i18n('entities.patient.fields.firstName'),
    {
      "required": true,
      "min": 2,
      "max": 50
    },
  ),
  middleName: yupFormSchemas.string(
    i18n('entities.patient.fields.middleName'),
    {},
  ),
  lastName: yupFormSchemas.string(
    i18n('entities.patient.fields.lastName'),
    {
      "required": true,
      "min": 2,
      "max": 100
    },
  ),
  fullName: yupFormSchemas.string(
    i18n('entities.patient.fields.fullName'),
    {
      "min": 2,
      "max": 255
    },
  ),
  gender: yupFormSchemas.enumerator(
    i18n('entities.patient.fields.gender'),
    {
      "required": true,
      "options": patientEnumerators.gender
    },
  ),
  age: yupFormSchemas.integer(
    i18n('entities.patient.fields.age'),
    {},
  ),
  localityName: yupFormSchemas.string(
    i18n('entities.patient.fields.localityName'),
    {},
  ),
  mobileNumber: yupFormSchemas.string(
    i18n('entities.patient.fields.mobileNumber'),
    {},
  ),
  aadharNumber: yupFormSchemas.string(
    i18n('entities.patient.fields.aadharNumber'),
    {},
  ),
  dateOfBirth: yupFormSchemas.date(
    i18n('entities.patient.fields.dateOfBirth'),
    {},
  ),
  picture: yupFormSchemas.images(
    i18n('entities.patient.fields.picture'),
    {},
  ),
  medicalHistory: yupFormSchemas.relationToOne(
    i18n('entities.patient.fields.medicalHistory'),
    {},
  ),
  medicalVisits: yupFormSchemas.relationToMany(
    i18n('entities.patient.fields.medicalVisits'),
    {},
  ),
  medicalDocs: yupFormSchemas.relationToMany(
    i18n('entities.patient.fields.medicalDocs'),
    {},
  ),
});

function PatientForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      firstName: record.firstName,
      middleName: record.middleName,
      lastName: record.lastName,
      fullName: record.fullName,
      gender: record.gender,
      age: record.age,
      localityName: record.localityName,
      mobileNumber: record.mobileNumber,
      aadharNumber: record.aadharNumber,
      dateOfBirth: record.dateOfBirth ? moment(record.dateOfBirth, 'YYYY-MM-DD') : null,
      picture: record.picture || [],
      medicalHistory: record.medicalHistory,
      medicalVisits: record.medicalVisits || [],
      medicalDocs: record.medicalDocs || [],
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
              <InputFormItem
                name="firstName"
                label={i18n('entities.patient.fields.firstName')}  
                required={true}
              autoFocus
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="middleName"
                label={i18n('entities.patient.fields.middleName')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="lastName"
                label={i18n('entities.patient.fields.lastName')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="fullName"
                label={i18n('entities.patient.fields.fullName')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <RadioFormItem
                name="gender"
                label={i18n('entities.patient.fields.gender')}
                options={patientEnumerators.gender.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.patient.enumerators.gender.${value}`,
                    ),
                  }),
                )}
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="age"
                label={i18n('entities.patient.fields.age')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="localityName"
                label={i18n('entities.patient.fields.localityName')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="mobileNumber"
                label={i18n('entities.patient.fields.mobileNumber')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="aadharNumber"
                label={i18n('entities.patient.fields.aadharNumber')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DatePickerFormItem
                name="dateOfBirth"
                label={i18n('entities.patient.fields.dateOfBirth')}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <ImagesFormItem
                name="picture"
                label={i18n('entities.patient.fields.picture')}
                required={false}
                storage={Storage.values.patientPicture}
                max={undefined}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <MedicalHistoryAutocompleteFormItem  
                name="medicalHistory"
                label={i18n('entities.patient.fields.medicalHistory')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <PatientVisitAutocompleteFormItem  
                name="medicalVisits"
                label={i18n('entities.patient.fields.medicalVisits')}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <PatientDocumentAutocompleteFormItem  
                name="medicalDocs"
                label={i18n('entities.patient.fields.medicalDocs')}
                required={false}
                showCreate={!props.modal}
                mode="multiple"
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

export default PatientForm;
