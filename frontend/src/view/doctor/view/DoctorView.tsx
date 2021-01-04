import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import UserViewItem from 'src/view/user/view/UserViewItem';

function DoctorView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n('entities.doctor.fields.name')}
          value={record.name}
        />

        <TextViewItem
          label={i18n('entities.doctor.fields.specialization')}
          value={record.specialization}
        />

        <UserViewItem
          label={i18n('entities.doctor.fields.user')}
          value={record.user}
        />

        <TextViewItem
          label={i18n('entities.doctor.fields.phone')}
          value={record.phone}
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

export default DoctorView;
