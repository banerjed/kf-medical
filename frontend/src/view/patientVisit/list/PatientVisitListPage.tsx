import React from 'react';
import { i18n } from 'src/i18n';
import PatientVisitListFilter from 'src/view/patientVisit/list/PatientVisitListFilter';
import PatientVisitListTable from 'src/view/patientVisit/list/PatientVisitListTable';
import PatientVisitListToolbar from 'src/view/patientVisit/list/PatientVisitListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PatientVisitListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.patientVisit.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.patientVisit.list.title')}
        </PageTitle>

        <PatientVisitListToolbar />
        <PatientVisitListFilter />
        <PatientVisitListTable />
      </ContentWrapper>
    </>
  );
}

export default PatientVisitListPage;
