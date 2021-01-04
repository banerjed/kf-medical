import { createSelector } from 'reselect';

const selectRaw = (state) => state.patientVisit.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const patientVisitDestroySelectors = {
  selectLoading,
};

export default patientVisitDestroySelectors;
