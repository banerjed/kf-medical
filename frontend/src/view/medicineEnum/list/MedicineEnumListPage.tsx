import React from 'react';
import { i18n } from 'src/i18n';
import MedicineEnumListFilter from 'src/view/medicineEnum/list/MedicineEnumListFilter';
import MedicineEnumListTable from 'src/view/medicineEnum/list/MedicineEnumListTable';
import MedicineEnumListToolbar from 'src/view/medicineEnum/list/MedicineEnumListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function MedicineEnumListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.medicineEnum.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.medicineEnum.list.title')}
        </PageTitle>

        <MedicineEnumListToolbar />
        <MedicineEnumListFilter />
        <MedicineEnumListTable />
      </ContentWrapper>
    </>
  );
}

export default MedicineEnumListPage;
