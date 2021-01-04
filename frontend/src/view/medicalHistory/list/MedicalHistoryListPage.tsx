import React from 'react';
import { i18n } from 'src/i18n';
import MedicalHistoryListFilter from 'src/view/medicalHistory/list/MedicalHistoryListFilter';
import MedicalHistoryListTable from 'src/view/medicalHistory/list/MedicalHistoryListTable';
import MedicalHistoryListToolbar from 'src/view/medicalHistory/list/MedicalHistoryListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function MedicalHistoryListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.medicalHistory.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.medicalHistory.list.title')}
        </PageTitle>

        <MedicalHistoryListToolbar />
        <MedicalHistoryListFilter />
        <MedicalHistoryListTable />
      </ContentWrapper>
    </>
  );
}

export default MedicalHistoryListPage;
