import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/medicineEnum/view/medicineEnumViewActions';
import selectors from 'src/modules/medicineEnum/view/medicineEnumViewSelectors';
import MedicineEnumView from 'src/view/medicineEnum/view/MedicineEnumView';
import MedicineEnumViewToolbar from 'src/view/medicineEnum/view/MedicineEnumViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function MedicineEnumPage() {
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
          [i18n('entities.medicineEnum.menu'), '/medicine-enum'],
          [i18n('entities.medicineEnum.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.medicineEnum.view.title')}
        </PageTitle>

        <MedicineEnumViewToolbar match={match} />

        <MedicineEnumView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default MedicineEnumPage;
