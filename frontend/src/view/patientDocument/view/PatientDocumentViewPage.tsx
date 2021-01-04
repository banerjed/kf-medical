import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/patientDocument/view/patientDocumentViewActions';
import selectors from 'src/modules/patientDocument/view/patientDocumentViewSelectors';
import PatientDocumentView from 'src/view/patientDocument/view/PatientDocumentView';
import PatientDocumentViewToolbar from 'src/view/patientDocument/view/PatientDocumentViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function PatientDocumentPage() {
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
          [i18n('entities.patientDocument.menu'), '/patient-document'],
          [i18n('entities.patientDocument.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.patientDocument.view.title')}
        </PageTitle>

        <PatientDocumentViewToolbar match={match} />

        <PatientDocumentView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default PatientDocumentPage;
