import { createSelector } from 'reselect';

const selectRaw = (state) => state.patientVisit.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const patientVisitViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default patientVisitViewSelectors;
