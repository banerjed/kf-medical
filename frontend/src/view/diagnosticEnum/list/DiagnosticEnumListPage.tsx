import React from 'react';
import { i18n } from 'src/i18n';
import DiagnosticEnumListFilter from 'src/view/diagnosticEnum/list/DiagnosticEnumListFilter';
import DiagnosticEnumListTable from 'src/view/diagnosticEnum/list/DiagnosticEnumListTable';
import DiagnosticEnumListToolbar from 'src/view/diagnosticEnum/list/DiagnosticEnumListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function DiagnosticEnumListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.diagnosticEnum.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.diagnosticEnum.list.title')}
        </PageTitle>

        <DiagnosticEnumListToolbar />
        <DiagnosticEnumListFilter />
        <DiagnosticEnumListTable />
      </ContentWrapper>
    </>
  );
}

export default DiagnosticEnumListPage;
