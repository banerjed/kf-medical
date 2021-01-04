import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';
import MedicalHistoryViewItem from 'src/view/medicalHistory/view/MedicalHistoryViewItem';
import PatientVisitViewItem from 'src/view/patientVisit/view/PatientVisitViewItem';
import PatientDocumentViewItem from 'src/view/patientDocument/view/PatientDocumentViewItem';

function PatientView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <TextViewItem
          label={i18n('entities.patient.fields.firstName')}
          value={record.firstName}
        />

        <TextViewItem
          label={i18n('entities.patient.fields.middleName')}
          value={record.middleName}
        />

        <TextViewItem
          label={i18n('entities.patient.fields.lastName')}
          value={record.lastName}
        />

        <TextViewItem
          label={i18n('entities.patient.fields.fullName')}
          value={record.fullName}
        />

        <TextViewItem
          label={i18n('entities.patient.fields.gender')}
          value={
            record.gender &&
            i18n(
              `entities.patient.enumerators.gender.${record.gender}`,
            )
          }
        />

        <TextViewItem
          label={i18n('entities.patient.fields.age')}
          value={record.age}
        />

        <TextViewItem
          label={i18n('entities.patient.fields.localityName')}
          value={record.localityName}
        />

        <TextViewItem
          label={i18n('entities.patient.fields.mobileNumber')}
          value={record.mobileNumber}
        />

        <TextViewItem
          label={i18n('entities.patient.fields.aadharNumber')}
          value={record.aadharNumber}
        />

        <TextViewItem
          label={i18n('entities.patient.fields.dateOfBirth')}
          value={record.dateOfBirth}
        />

        <ImagesViewItem
          label={i18n('entities.patient.fields.picture')}
          value={record.picture}
        />

        <MedicalHistoryViewItem
          label={i18n('entities.patient.fields.medicalHistory')}
          value={record.medicalHistory}
        />

        <PatientVisitViewItem
          label={i18n('entities.patient.fields.medicalVisits')}
          value={record.medicalVisits}
        />

        <PatientDocumentViewItem
          label={i18n('entities.patient.fields.medicalDocs')}
          value={record.medicalDocs}
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

export default PatientView;
