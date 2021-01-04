import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/patientDocument/importer/patientDocumentImporterActions';
import fields from 'src/modules/patientDocument/importer/patientDocumentImporterFields';
import selectors from 'src/modules/patientDocument/importer/patientDocumentImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PatientDocumentImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.patientDocument.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.patientDocument.menu'), '/patient-document'],
          [i18n('entities.patientDocument.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.patientDocument.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default PatientDocumentImportPage;
