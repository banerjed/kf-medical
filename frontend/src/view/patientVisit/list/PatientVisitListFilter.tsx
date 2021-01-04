import {
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import UndoIcon from '@material-ui/icons/Undo';
import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from 'src/i18n';
import actions from 'src/modules/patientVisit/list/patientVisitListActions';
import selectors from 'src/modules/patientVisit/list/patientVisitListSelectors';
import yupFilterSchemas from 'src/modules/shared/yup/yupFilterSchemas';
import FilterWrapper, {
  FilterButtons,
} from 'src/view/shared/styles/FilterWrapper';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import filterRenders from 'src/modules/shared/filter/filterRenders';
import FilterPreview from 'src/view/shared/filter/FilterPreview';
import FilterAccordion from 'src/view/shared/filter/FilterAccordion';
import DatePickerRangeFormItem from 'src/view/shared/form/items/DatePickerRangeFormItem';
import PatientAutocompleteFormItem from 'src/view/patient/autocomplete/PatientAutocompleteFormItem';
import HealthCenterAutocompleteFormItem from 'src/view/healthCenter/autocomplete/HealthCenterAutocompleteFormItem';
import DoctorAutocompleteFormItem from 'src/view/doctor/autocomplete/DoctorAutocompleteFormItem';

const schema = yup.object().shape({
  patient: yupFilterSchemas.relationToOne(
    i18n('entities.patientVisit.fields.patient'),
  ),
  medicalCenter: yupFilterSchemas.relationToOne(
    i18n('entities.patientVisit.fields.medicalCenter'),
  ),
  doctor: yupFilterSchemas.relationToOne(
    i18n('entities.patientVisit.fields.doctor'),
  ),
  visitDateRange: yupFilterSchemas.dateRange(
    i18n('entities.patientVisit.fields.visitDateRange'),
  ),
});

const emptyValues = {
  patient: null,
  medicalCenter: null,
  doctor: null,
  visitDateRange: [],
}

const previewRenders = {
  patient: {
      label: i18n('entities.patientVisit.fields.patient'),
      render: filterRenders.relationToOne(),
    },
  medicalCenter: {
      label: i18n('entities.patientVisit.fields.medicalCenter'),
      render: filterRenders.relationToOne(),
    },
  doctor: {
      label: i18n('entities.patientVisit.fields.doctor'),
      render: filterRenders.relationToOne(),
    },
  visitDateRange: {
    label: i18n('entities.patientVisit.fields.visitDateRange'),
    render: filterRenders.dateRange(),
  },
}

function PatientVisitListFilter(props) {
  const rawFilter = useSelector(selectors.selectRawFilter);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const [initialValues] = useState(() => {
    return {
      ...emptyValues,
      ...rawFilter,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialValues,
    mode: 'all',
  });

  useEffect(() => {
    dispatch(actions.doFetch(schema.cast(initialValues), rawFilter));
    // eslint-disable-next-line
  }, [dispatch]);

  const onSubmit = (values) => {
    const rawValues = form.getValues();
    dispatch(actions.doFetch(values, rawValues));
    setExpanded(false);
  };

  const onReset = () => {
    Object.keys(emptyValues).forEach((key) => {
      form.setValue(key, emptyValues[key]);
    });
    dispatch(actions.doReset());
    setExpanded(false);
  };

  return (
    <FilterWrapper>
      <FilterAccordion
        expanded={expanded}
        onChange={(event, isExpanded) =>
          setExpanded(isExpanded)
        }
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <FilterPreview
            values={rawFilter}
            renders={previewRenders}
            expanded={expanded}
          />
        </AccordionSummary>
        <AccordionDetails>
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item lg={6} xs={12}>
                  <PatientAutocompleteFormItem  
                    name="patient"
                    label={i18n('entities.patientVisit.fields.patient')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <HealthCenterAutocompleteFormItem  
                    name="medicalCenter"
                    label={i18n('entities.patientVisit.fields.medicalCenter')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <DoctorAutocompleteFormItem  
                    name="doctor"
                    label={i18n('entities.patientVisit.fields.doctor')}        
                  />
                </Grid>
                <Grid item lg={6} xs={12}>
                  <DatePickerRangeFormItem
                    name="visitDateRange"
                    label={i18n('entities.patientVisit.fields.visitDateRange')}    
                  />
                </Grid>
              </Grid>

              <FilterButtons>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={props.loading}
                  startIcon={<SearchIcon />}
                  size="small"
                >
                  {i18n('common.search')}
                </Button>

                <Button
                  type="button"
                  onClick={onReset}
                  disabled={props.loading}
                  startIcon={<UndoIcon />}
                  size="small"
                >
                  {i18n('common.reset')}
                </Button>
              </FilterButtons>
            </form>
          </FormProvider>
        </AccordionDetails>
      </FilterAccordion>
    </FilterWrapper>
  );
}

export default PatientVisitListFilter;