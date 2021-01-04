import React from 'react';
import { i18n } from 'src/i18n';
import MedicineInventoryListFilter from 'src/view/medicineInventory/list/MedicineInventoryListFilter';
import MedicineInventoryListTable from 'src/view/medicineInventory/list/MedicineInventoryListTable';
import MedicineInventoryListToolbar from 'src/view/medicineInventory/list/MedicineInventoryListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function MedicineInventoryListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.medicineInventory.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.medicineInventory.list.title')}
        </PageTitle>

        <MedicineInventoryListToolbar />
        <MedicineInventoryListFilter />
        <MedicineInventoryListTable />
      </ContentWrapper>
    </>
  );
}

export default MedicineInventoryListPage;
