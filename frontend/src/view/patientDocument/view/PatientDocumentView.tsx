import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';
import PatientViewItem from 'src/view/patient/view/PatientViewItem';

function PatientDocumentView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <PatientViewItem
          label={i18n('entities.patientDocument.fields.patient')}
          value={record.patient}
        />

        <ImagesViewItem
          label={i18n('entities.patientDocument.fields.image')}
          value={record.image}
        />

        <TextViewItem
          label={i18n('entities.patientDocument.fields.reportName')}
          value={record.reportName}
        />

        <TextViewItem
          label={i18n('entities.patientDocument.fields.reportDate')}
          value={record.reportDate}
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

export default PatientDocumentView;
