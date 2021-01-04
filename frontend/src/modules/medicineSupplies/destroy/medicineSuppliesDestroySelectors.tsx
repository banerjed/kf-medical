import { createSelector } from 'reselect';

const selectRaw = (state) => state.medicineSupplies.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const medicineSuppliesDestroySelectors = {
  selectLoading,
};

export default medicineSuppliesDestroySelectors;
