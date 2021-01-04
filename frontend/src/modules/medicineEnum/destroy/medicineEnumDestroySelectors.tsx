import { createSelector } from 'reselect';

const selectRaw = (state) => state.medicineEnum.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const medicineEnumDestroySelectors = {
  selectLoading,
};

export default medicineEnumDestroySelectors;
