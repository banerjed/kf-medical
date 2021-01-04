import { createSelector } from 'reselect';

const selectRaw = (state) => state.healthCenter.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const healthCenterViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default healthCenterViewSelectors;
