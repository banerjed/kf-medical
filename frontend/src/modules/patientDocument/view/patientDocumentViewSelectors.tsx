import { createSelector } from 'reselect';

const selectRaw = (state) => state.patientDocument.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const patientDocumentViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default patientDocumentViewSelectors;
