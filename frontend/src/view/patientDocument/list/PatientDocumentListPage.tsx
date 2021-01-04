import React from 'react';
import { i18n } from 'src/i18n';
import PatientDocumentListFilter from 'src/view/patientDocument/list/PatientDocumentListFilter';
import PatientDocumentListTable from 'src/view/patientDocument/list/PatientDocumentListTable';
import PatientDocumentListToolbar from 'src/view/patientDocument/list/PatientDocumentListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PatientDocumentListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.patientDocument.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.patientDocument.list.title')}
        </PageTitle>

        <PatientDocumentListToolbar />
        <PatientDocumentListFilter />
        <PatientDocumentListTable />
      </ContentWrapper>
    </>
  );
}

export default PatientDocumentListPage;
