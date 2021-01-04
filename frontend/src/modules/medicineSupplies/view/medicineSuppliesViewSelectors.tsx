import { createSelector } from 'reselect';

const selectRaw = (state) => state.medicineSupplies.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const medicineSuppliesViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default medicineSuppliesViewSelectors;
