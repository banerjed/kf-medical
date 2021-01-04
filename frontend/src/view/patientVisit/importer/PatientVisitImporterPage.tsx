import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/patientVisit/importer/patientVisitImporterActions';
import fields from 'src/modules/patientVisit/importer/patientVisitImporterFields';
import selectors from 'src/modules/patientVisit/importer/patientVisitImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PatientVisitImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.patientVisit.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.patientVisit.menu'), '/patient-visit'],
          [i18n('entities.patientVisit.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.patientVisit.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default PatientVisitImportPage;
