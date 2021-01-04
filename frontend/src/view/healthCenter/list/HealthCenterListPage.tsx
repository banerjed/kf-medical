import React from 'react';
import { i18n } from 'src/i18n';
import HealthCenterListFilter from 'src/view/healthCenter/list/HealthCenterListFilter';
import HealthCenterListTable from 'src/view/healthCenter/list/HealthCenterListTable';
import HealthCenterListToolbar from 'src/view/healthCenter/list/HealthCenterListToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function HealthCenterListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.healthCenter.menu')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.healthCenter.list.title')}
        </PageTitle>

        <HealthCenterListToolbar />
        <HealthCenterListFilter />
        <HealthCenterListTable />
      </ContentWrapper>
    </>
  );
}

export default HealthCenterListPage;
