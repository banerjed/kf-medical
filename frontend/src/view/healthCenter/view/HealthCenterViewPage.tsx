import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/healthCenter/view/healthCenterViewActions';
import selectors from 'src/modules/healthCenter/view/healthCenterViewSelectors';
import HealthCenterView from 'src/view/healthCenter/view/HealthCenterView';
import HealthCenterViewToolbar from 'src/view/healthCenter/view/HealthCenterViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function HealthCenterPage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.healthCenter.menu'), '/health-center'],
          [i18n('entities.healthCenter.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.healthCenter.view.title')}
        </PageTitle>

        <HealthCenterViewToolbar match={match} />

        <HealthCenterView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default HealthCenterPage;
