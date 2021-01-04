import { createSelector } from 'reselect';

const selectRaw = (state) => state.healthCenter.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const healthCenterDestroySelectors = {
  selectLoading,
};

export default healthCenterDestroySelectors;
