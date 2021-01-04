import { createSelector } from 'reselect';

const selectRaw = (state) => state.patient.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const patientViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default patientViewSelectors;
