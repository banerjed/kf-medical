import { createSelector } from 'reselect';

const selectRaw = (state) => state.symptomsEnum.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const symptomsEnumDestroySelectors = {
  selectLoading,
};

export default symptomsEnumDestroySelectors;
