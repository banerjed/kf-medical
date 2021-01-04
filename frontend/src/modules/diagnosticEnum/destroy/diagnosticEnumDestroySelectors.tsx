import { createSelector } from 'reselect';

const selectRaw = (state) => state.diagnosticEnum.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const diagnosticEnumDestroySelectors = {
  selectLoading,
};

export default diagnosticEnumDestroySelectors;
