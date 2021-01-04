import { createSelector } from 'reselect';

const selectRaw = (state) => state.doctor.destroy;

const selectLoading = createSelector([selectRaw], (raw) =>
  Boolean(raw.loading),
);

const doctorDestroySelectors = {
  selectLoading,
};

export default doctorDestroySelectors;
