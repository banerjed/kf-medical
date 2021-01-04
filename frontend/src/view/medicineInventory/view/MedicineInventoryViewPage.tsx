import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/medicineInventory/view/medicineInventoryViewActions';
import selectors from 'src/modules/medicineInventory/view/medicineInventoryViewSelectors';
import MedicineInventoryView from 'src/view/medicineInventory/view/MedicineInventoryView';
import MedicineInventoryViewToolbar from 'src/view/medicineInventory/view/MedicineInventoryViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function MedicineInventoryPage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.medicineInventory.menu'), '/medicine-inventory'],
          [i18n('entities.medicineInventory.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.medicineInventory.view.title')}
        </PageTitle>

        <MedicineInventoryViewToolbar match={match} />

        <MedicineInventoryView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default MedicineInventoryPage;
