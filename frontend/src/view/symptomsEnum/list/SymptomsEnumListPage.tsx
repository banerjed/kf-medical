import React from 'react';
import { i18n } from 'src/i18n';
import SymptomsEnumListFilter from 'src/view/symptomsEnum/list/SymptomsEnumListFilter';
import SymptomsEnumListTable from 'src/view/symptomsEnum/list/SymptomsEnumListTable';
import SymptomsEnumListToolbar from 'src/view/symptomsEnum/list/SymptomsEnumListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function SymptomsEnumListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.symptomsEnum.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.symptomsEnum.list.title')}
        </PageTitle>

        <SymptomsEnumListToolbar />
        <SymptomsEnumListFilter />
        <SymptomsEnumListTable />
      </ContentWrapper>
    </>
  );
}

export default SymptomsEnumListPage;
