import { createSelector } from 'reselect';

const selectRaw = (state) => state.medicalHistory.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const medicalHistoryDestroySelectors = {
  selectLoading,
};

export default medicalHistoryDestroySelectors;
