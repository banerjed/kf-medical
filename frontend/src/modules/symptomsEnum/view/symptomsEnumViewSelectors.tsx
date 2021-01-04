import { createSelector } from 'reselect';

const selectRaw = (state) => state.symptomsEnum.view;

const selectRecord = createSelector(
  [selectRaw],
  (raw) => raw.record,
);

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const symptomsEnumViewSelectors = {
  selectLoading,
  selectRecord,
  selectRaw,
};

export default symptomsEnumViewSelectors;
