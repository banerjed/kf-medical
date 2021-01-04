import { createSelector } from 'reselect';

const selectRaw = (state) => state.medicineInventory.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const medicineInventoryDestroySelectors = {
  selectLoading,
};

export default medicineInventoryDestroySelectors;
