import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/medicineInventory/importer/medicineInventoryImporterActions';
import fields from 'src/modules/medicineInventory/importer/medicineInventoryImporterFields';
import selectors from 'src/modules/medicineInventory/importer/medicineInventoryImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function MedicineInventoryImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.medicineInventory.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.medicineInventory.menu'), '/medicine-inventory'],
          [i18n('entities.medicineInventory.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.medicineInventory.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default MedicineInventoryImportPage;
