import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/doctor/importer/doctorImporterActions';
import fields from 'src/modules/doctor/importer/doctorImporterFields';
import selectors from 'src/modules/doctor/importer/doctorImporterSelectors';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';
import PageTitle from 'src/view/shared/styles/PageTitle';

function DoctorImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.doctor.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.doctor.menu'), '/doctor'],
          [i18n('entities.doctor.importer.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.doctor.importer.title')}
        </PageTitle>

        <Importer />
      </ContentWrapper>
    </>
  );
}

export default DoctorImportPage;
