import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/symptomsEnum/importer/symptomsEnumImporterActions';
import fields from 'src/modules/symptomsEnum/importer/symptomsEnumImporterFields';
import selectors from 'src/modules/symptomsEnum/importer/symptomsEnumImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function SymptomsEnumImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.symptomsEnum.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.symptomsEnum.menu'), '/symptoms-enum'],
          [i18n('entities.symptomsEnum.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.symptomsEnum.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default SymptomsEnumImportPage;
