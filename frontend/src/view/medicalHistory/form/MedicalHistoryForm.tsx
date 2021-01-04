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
import SwitchFormItem from 'src/view/shared/form/items/SwitchFormItem';
import RadioFormItem from 'src/view/shared/form/items/RadioFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import medicalHistoryEnumerators from 'src/modules/medicalHistory/medicalHistoryEnumerators';
import PatientAutocompleteFormItem from 'src/view/patient/autocomplete/PatientAutocompleteFormItem';
import ChronicDiseaseEnumAutocompleteFormItem from 'src/view/chronicDiseaseEnum/autocomplete/ChronicDiseaseEnumAutocompleteFormItem';

const schema = yup.object().shape({
  patient: yupFormSchemas.relationToOne(
    i18n('entities.medicalHistory.fields.patient'),
    {},
  ),
  smoking: yupFormSchemas.enumerator(
    i18n('entities.medicalHistory.fields.smoking'),
    {
      "options": medicalHistoryEnumerators.smoking
    },
  ),
  drugUse: yupFormSchemas.boolean(
    i18n('entities.medicalHistory.fields.drugUse'),
    {},
  ),
  drink: yupFormSchemas.enumerator(
    i18n('entities.medicalHistory.fields.drink'),
    {
      "options": medicalHistoryEnumerators.drink
    },
  ),
  chronicDisease1: yupFormSchemas.relationToOne(
    i18n('entities.medicalHistory.fields.chronicDisease1'),
    {},
  ),
  chronicDisease2: yupFormSchemas.relationToOne(
    i18n('entities.medicalHistory.fields.chronicDisease2'),
    {},
  ),
  chronicDisease3: yupFormSchemas.relationToOne(
    i18n('entities.medicalHistory.fields.chronicDisease3'),
    {},
  ),
  familyHistory: yupFormSchemas.string(
    i18n('entities.medicalHistory.fields.familyHistory'),
    {},
  ),
});

function MedicalHistoryForm(props) {
  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      patient: record.patient,
      smoking: record.smoking,
      drugUse: record.drugUse,
      drink: record.drink,
      chronicDisease1: record.chronicDisease1,
      chronicDisease2: record.chronicDisease2,
      chronicDisease3: record.chronicDisease3,
      familyHistory: record.familyHistory,
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
                label={i18n('entities.medicalHistory.fields.patient')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SelectFormItem
                name="smoking"
                label={i18n('entities.medicalHistory.fields.smoking')}
                options={medicalHistoryEnumerators.smoking.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.medicalHistory.enumerators.smoking.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <SwitchFormItem
                name="drugUse"
                label={i18n('entities.medicalHistory.fields.drugUse')}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <RadioFormItem
                name="drink"
                label={i18n('entities.medicalHistory.fields.drink')}
                options={medicalHistoryEnumerators.drink.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.medicalHistory.enumerators.drink.${value}`,
                    ),
                  }),
                )}
                required={false}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <ChronicDiseaseEnumAutocompleteFormItem  
                name="chronicDisease1"
                label={i18n('entities.medicalHistory.fields.chronicDisease1')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <ChronicDiseaseEnumAutocompleteFormItem  
                name="chronicDisease2"
                label={i18n('entities.medicalHistory.fields.chronicDisease2')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <ChronicDiseaseEnumAutocompleteFormItem  
                name="chronicDisease3"
                label={i18n('entities.medicalHistory.fields.chronicDisease3')}
                required={false}
                showCreate={!props.modal}
              />
            </Grid>
            <Grid item lg={7} md={8} sm={12} xs={12}>
              <InputFormItem
                name="familyHistory"
                label={i18n('entities.medicalHistory.fields.familyHistory')}  
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

export default MedicalHistoryForm;
