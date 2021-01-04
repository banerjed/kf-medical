import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/healthCenter/importer/healthCenterImporterActions';
import fields from 'src/modules/healthCenter/importer/healthCenterImporterFields';
import selectors from 'src/modules/healthCenter/importer/healthCenterImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function HealthCenterImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.healthCenter.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.healthCenter.menu'), '/health-center'],
          [i18n('entities.healthCenter.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.healthCenter.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default HealthCenterImportPage;
