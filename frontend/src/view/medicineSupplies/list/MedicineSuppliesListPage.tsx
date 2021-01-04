import React from 'react';
import { i18n } from 'src/i18n';
import MedicineSuppliesListFilter from 'src/view/medicineSupplies/list/MedicineSuppliesListFilter';
import MedicineSuppliesListTable from 'src/view/medicineSupplies/list/MedicineSuppliesListTable';
import MedicineSuppliesListToolbar from 'src/view/medicineSupplies/list/MedicineSuppliesListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function MedicineSuppliesListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.medicineSupplies.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.medicineSupplies.list.title')}
        </PageTitle>

        <MedicineSuppliesListToolbar />
        <MedicineSuppliesListFilter />
        <MedicineSuppliesListTable />
      </ContentWrapper>
    </>
  );
}

export default MedicineSuppliesListPage;
