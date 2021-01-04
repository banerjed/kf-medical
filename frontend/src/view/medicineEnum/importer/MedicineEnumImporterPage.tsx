import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/medicineEnum/importer/medicineEnumImporterActions';
import fields from 'src/modules/medicineEnum/importer/medicineEnumImporterFields';
import selectors from 'src/modules/medicineEnum/importer/medicineEnumImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function MedicineEnumImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.medicineEnum.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.medicineEnum.menu'), '/medicine-enum'],
          [i18n('entities.medicineEnum.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.medicineEnum.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default MedicineEnumImportPage;
