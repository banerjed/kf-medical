import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';

function HealthCenterView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n('entities.healthCenter.fields.name')}
          value={record.name}
        />

        <TextViewItem
          label={i18n('entities.healthCenter.fields.address')}
          value={record.address}
        />

        <TextViewItem
          label={i18n('entities.healthCenter.fields.phoneNumber')}
          value={record.phoneNumber}
        />

        <UserViewItem
          label={i18n('entities.healthCenter.fields.adminName')}
          value={record.adminName}
        />        
      </div>
    );
  };

  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return renderView();
}

export default HealthCenterView;
