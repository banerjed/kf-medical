import React from 'react';
import { i18n } from 'src/i18n';
import DoctorListFilter from 'src/view/doctor/list/DoctorListFilter';
import DoctorListTable from 'src/view/doctor/list/DoctorListTable';
import DoctorListToolbar from 'src/view/doctor/list/DoctorListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function DoctorListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.doctor.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.doctor.list.title')}
        </PageTitle>

        <DoctorListToolbar />
        <DoctorListFilter />
        <DoctorListTable />
      </ContentWrapper>
    </>
  );
}

export default DoctorListPage;
