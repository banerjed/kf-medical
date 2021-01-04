import { createSelector } from 'reselect';

const selectRaw = (state) => state.diagnosticEnum.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const diagnosticEnumViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default diagnosticEnumViewSelectors;
