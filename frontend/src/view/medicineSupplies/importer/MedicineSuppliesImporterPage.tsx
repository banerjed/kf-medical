import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/medicineSupplies/importer/medicineSuppliesImporterActions';
import fields from 'src/modules/medicineSupplies/importer/medicineSuppliesImporterFields';
import selectors from 'src/modules/medicineSupplies/importer/medicineSuppliesImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function MedicineSuppliesImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.medicineSupplies.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.medicineSupplies.menu'), '/medicine-supplies'],
          [i18n('entities.medicineSupplies.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.medicineSupplies.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default MedicineSuppliesImportPage;
