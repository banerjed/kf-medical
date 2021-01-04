import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/doctor/view/doctorViewActions';
import selectors from 'src/modules/doctor/view/doctorViewSelectors';
import DoctorView from 'src/view/doctor/view/DoctorView';
import DoctorViewToolbar from 'src/view/doctor/view/DoctorViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function DoctorPage() {
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
          [i18n('entities.doctor.menu'), '/doctor'],
          [i18n('entities.doctor.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.doctor.view.title')}
        </PageTitle>

        <DoctorViewToolbar match={match} />

        <DoctorView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default DoctorPage;
