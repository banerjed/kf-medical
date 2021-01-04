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
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import patientVisitEnumerators from 'src/modules/patientVisit/patientVisitEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import Storage from 'src/security/storage';
import ImagesFormItem from 'src/view/shared/form/items/ImagesFormItem';
import PatientAutocompleteFormItem from 'src/view/patient/autocomplete/PatientAutocompleteFormItem';
import HealthCenterAutocompleteFormItem from 'src/view/healthCenter/autocomplete/HealthCenterAutocompleteFormItem';
import DoctorAutocompleteFormItem from 'src/view/doctor/autocomplete/DoctorAutocompleteFormItem';
import SymptomsEnumAutocompleteFormItem from 'src/view/symptomsEnum/autocomplete/SymptomsEnumAutocompleteFormItem';
import MedicineEnumAutocompleteFormItem from 'src/view/medicineEnum/autocomplete/MedicineEnumAutocompleteFormItem';

const schema = yup.object().shape({
  patient: yupFormSchemas.relationToOne(
    i18n('entities.patientVisit.fields.patient'),
    {
      "required": true
    },
  ),
  medicalCenter: yupFormSchemas.relationToOne(
    i18n('entities.patientVisit.fields.medicalCenter'),
    {
      "required": true
    },
  ),
  doctor: yupFormSchemas.relationToOne(
    i18n('entities.patientVisit.fields.doctor'),
    {
      "required": true
    },
  ),
  visitDate: yupFormSchemas.date(
    i18n('entities.patientVisit.fields.visitDate'),
    {
      "required": true
    },
  ),
  symptom1: yupFormSchemas.relationToOne(
    i18n('entities.patientVisit.fields.symptom1'),
    {
      "required": true
    },
  ),
  symptom2: yupFormSchemas.relationToOne(
    i18n('entities.patientVisit.fields.symptom2'),
    {},
  ),
  symptom3: yupFormSchemas.relationToOne(
    i18n('entities.patientVisit.fields.symptom3'),
    {},
  ),
  otherSymptoms: yupFormSchemas.string(
    i18n('entities.patientVisit.fields.otherSymptoms'),
    {},
  ),
  vitalStatistics: yupFormSchemas.string(
    i18n('entities.patientVisit.fields.vitalStatistics'),
    {},
  ),
  diagnosis: yupFormSchemas.string(
    i18n('entities.patientVisit.fields.diagnosis'),
    {
      "required": true
    },
  ),
  requestedLabs: yupFormSchemas.string(
    i18n('entities.patientVisit.fields.requestedLabs'),
    {},
  ),
  medicine1: yupFormSchemas.relationToOne(
    i18n('entities.patientVisit.fields.medicine1'),
    {},
  ),
  med1Qty: yupFormSchemas.integer(
    i18n('entities.patientVisit.fields.med1Qty'),
    {},
  ),
  medicine2: yupFormSchemas.relationToOne(
    i18n('entities.patientVisit.fields.medicine2'),
    {},
  ),
  med2Qty: yupFormSchemas.integer(
    i18n('entities.patientVisit.fields.med2Qty'),
    {},
  ),
  medicine3: yupFormSchemas.relationToOne(
    i18n('entities.patientVisit.fields.medicine3'),
    {},
  ),
  med3Qty: yupFormSchemas.integer(
    i18n('entities.patientVisit.fields.med3Qty'),
    {},
  ),
  medicine4: yupFormSchemas.relationToOne(
    i18n('entities.patientVisit.fields.medicine4'),
    {},
  ),
  med4Qty: yupFormSchemas.integer(
    i18n('entities.patientVisit.fields.med4Qty'),
    {},
  ),
  medicineInstructions: yupFormSchemas.string(
    i18n('entities.patientVisit.fields.medicineInstructions'),
    {},
  ),
  referralLab: yupFormSchemas.string(
    i18n('entities.patientVisit.fields.referralLab'),
    {},
  ),
  referralHospital: yupFormSchemas.string(
    i18n('entities.patientVisit.fields.referralHospital'),
    {},
  ),
  referredDoctor: yupFormSchemas.string(
    i18n('entities.patientVisit.fields.referredDoctor'),
    {},
  ),
  returnIn: yupFormSchemas.enumerator(
    i18n('entities.patientVisit.fields.returnIn'),
    {
      "options": patientVisitEnumerators.returnIn
    },
  ),
  prescription: yupFormSchemas.images(
    i18n('entities.patientVisit.fields.prescription'),
    {},
  ),
  patientCopay: yupFormSchemas.integer(
    i18n('entities.patientVisit.fields.patientCopay'),
    {},
  ),
});

function PatientVisitForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      patient: record.patient,
      medicalCenter: record.medicalCenter,
      doctor: record.doctor,
      visitDate: record.visitDate ? moment(record.visitDate, 'YYYY-MM-DD') : null,
      symptom1: record.symptom1,
      symptom2: record.symptom2,
      symptom3: record.symptom3,
      otherSymptoms: record.otherSymptoms,
      vitalStatistics: record.vitalStatistics,
      diagnosis: record.diagnosis,
      requestedLabs: record.requestedLabs,
      medicine1: record.medicine1,
      med1Qty: record.med1Qty,
      medicine2: record.medicine2,
      med2Qty: record.med2Qty,
      medicine3: record.medicine3,
      med3Qty: record.med3Qty,
      medicine4: record.medicine4,
      med4Qty: record.med4Qty,
      medicineInstructions: record.medicineInstructions,
      referralLab: record.referralLab,
      referralHospital: record.referralHospital,
      referredDoctor: record.referredDoctor,
      returnIn: record.returnIn,
      prescription: record.prescription || [],
      patientCopay: record.patientCopay,
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
                label={i18n('entities.patientVisit.fields.patient')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <HealthCenterAutocompleteFormItem  
                name="medicalCenter"
                label={i18n('entities.patientVisit.fields.medicalCenter')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DoctorAutocompleteFormItem  
                name="doctor"
                label={i18n('entities.patientVisit.fields.doctor')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <DatePickerFormItem
                name="visitDate"
                label={i18n('entities.patientVisit.fields.visitDate')}
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SymptomsEnumAutocompleteFormItem  
                name="symptom1"
                label={i18n('entities.patientVisit.fields.symptom1')}
                required={true}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SymptomsEnumAutocompleteFormItem  
                name="symptom2"
                label={i18n('entities.patientVisit.fields.symptom2')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SymptomsEnumAutocompleteFormItem  
                name="symptom3"
                label={i18n('entities.patientVisit.fields.symptom3')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="otherSymptoms"
                label={i18n('entities.patientVisit.fields.otherSymptoms')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="vitalStatistics"
                label={i18n('entities.patientVisit.fields.vitalStatistics')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="diagnosis"
                label={i18n('entities.patientVisit.fields.diagnosis')}  
                required={true}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="requestedLabs"
                label={i18n('entities.patientVisit.fields.requestedLabs')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <MedicineEnumAutocompleteFormItem  
                name="medicine1"
                label={i18n('entities.patientVisit.fields.medicine1')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="med1Qty"
                label={i18n('entities.patientVisit.fields.med1Qty')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <MedicineEnumAutocompleteFormItem  
                name="medicine2"
                label={i18n('entities.patientVisit.fields.medicine2')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="med2Qty"
                label={i18n('entities.patientVisit.fields.med2Qty')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <MedicineEnumAutocompleteFormItem  
                name="medicine3"
                label={i18n('entities.patientVisit.fields.medicine3')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="med3Qty"
                label={i18n('entities.patientVisit.fields.med3Qty')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <MedicineEnumAutocompleteFormItem  
                name="medicine4"
                label={i18n('entities.patientVisit.fields.medicine4')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="med4Qty"
                label={i18n('entities.patientVisit.fields.med4Qty')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="medicineInstructions"
                label={i18n('entities.patientVisit.fields.medicineInstructions')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="referralLab"
                label={i18n('entities.patientVisit.fields.referralLab')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="referralHospital"
                label={i18n('entities.patientVisit.fields.referralHospital')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="referredDoctor"
                label={i18n('entities.patientVisit.fields.referredDoctor')}  
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="returnIn"
                label={i18n('entities.patientVisit.fields.returnIn')}
                options={patientVisitEnumerators.returnIn.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.patientVisit.enumerators.returnIn.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <ImagesFormItem
                name="prescription"
                label={i18n('entities.patientVisit.fields.prescription')}
                required={false}
                storage={Storage.values.patientVisitPrescription}
                max={undefined}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputNumberFormItem
                name="patientCopay"
                label={i18n('entities.patientVisit.fields.patientCopay')}  
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

export default PatientVisitForm;
