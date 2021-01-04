import { createSelector } from 'reselect';

const selectRaw = (state) => state.patientDocument.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const patientDocumentDestroySelectors = {
  selectLoading,
};

export default patientDocumentDestroySelectors;
