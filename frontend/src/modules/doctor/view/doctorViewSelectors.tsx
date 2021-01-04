import { createSelector } from 'reselect';

const selectRaw = (state) => state.doctor.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const doctorViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default doctorViewSelectors;
