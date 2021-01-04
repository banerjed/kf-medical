import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/medicalHistory/importer/medicalHistoryImporterActions';
import fields from 'src/modules/medicalHistory/importer/medicalHistoryImporterFields';
import selectors from 'src/modules/medicalHistory/importer/medicalHistoryImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function MedicalHistoryImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.medicalHistory.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.medicalHistory.menu'), '/medical-history'],
          [i18n('entities.medicalHistory.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.medicalHistory.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default MedicalHistoryImportPage;
