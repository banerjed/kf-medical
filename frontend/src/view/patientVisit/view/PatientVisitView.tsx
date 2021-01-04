import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import ImagesViewItem from 'src/view/shared/view/ImagesViewItem';
import PatientViewItem from 'src/view/patient/view/PatientViewItem';
import HealthCenterViewItem from 'src/view/healthCenter/view/HealthCenterViewItem';
import DoctorViewItem from 'src/view/doctor/view/DoctorViewItem';
import SymptomsEnumViewItem from 'src/view/symptomsEnum/view/SymptomsEnumViewItem';
import MedicineEnumViewItem from 'src/view/medicineEnum/view/MedicineEnumViewItem';

function PatientVisitView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <PatientViewItem
          label={i18n('entities.patientVisit.fields.patient')}
          value={record.patient}
        />

        <HealthCenterViewItem
          label={i18n('entities.patientVisit.fields.medicalCenter')}
          value={record.medicalCenter}
        />

        <DoctorViewItem
          label={i18n('entities.patientVisit.fields.doctor')}
          value={record.doctor}
        />

        <TextViewItem
          label={i18n('entities.patientVisit.fields.visitDate')}
          value={record.visitDate}
        />

        <SymptomsEnumViewItem
          label={i18n('entities.patientVisit.fields.symptom1')}
          value={record.symptom1}
        />

        <SymptomsEnumViewItem
          label={i18n('entities.patientVisit.fields.symptom2')}
          value={record.symptom2}
        />

        <SymptomsEnumViewItem
          label={i18n('entities.patientVisit.fields.symptom3')}
          value={record.symptom3}
        />

        <TextViewItem
          label={i18n('entities.patientVisit.fields.otherSymptoms')}
          value={record.otherSymptoms}
        />

        <TextViewItem
          label={i18n('entities.patientVisit.fields.vitalStatistics')}
          value={record.vitalStatistics}
        />

        <TextViewItem
          label={i18n('entities.patientVisit.fields.diagnosis')}
          value={record.diagnosis}
        />

        <TextViewItem
          label={i18n('entities.patientVisit.fields.requestedLabs')}
          value={record.requestedLabs}
        />

        <MedicineEnumViewItem
          label={i18n('entities.patientVisit.fields.medicine1')}
          value={record.medicine1}
        />

        <TextViewItem
          label={i18n('entities.patientVisit.fields.med1Qty')}
          value={record.med1Qty}
        />

        <MedicineEnumViewItem
          label={i18n('entities.patientVisit.fields.medicine2')}
          value={record.medicine2}
        />

        <TextViewItem
          label={i18n('entities.patientVisit.fields.med2Qty')}
          value={record.med2Qty}
        />

        <MedicineEnumViewItem
          label={i18n('entities.patientVisit.fields.medicine3')}
          value={record.medicine3}
        />

        <TextViewItem
          label={i18n('entities.patientVisit.fields.med3Qty')}
          value={record.med3Qty}
        />

        <MedicineEnumViewItem
          label={i18n('entities.patientVisit.fields.medicine4')}
          value={record.medicine4}
        />

        <TextViewItem
          label={i18n('entities.patientVisit.fields.med4Qty')}
          value={record.med4Qty}
        />

        <TextViewItem
          label={i18n('entities.patientVisit.fields.medicineInstructions')}
          value={record.medicineInstructions}
        />

        <TextViewItem
          label={i18n('entities.patientVisit.fields.referralLab')}
          value={record.referralLab}
        />

        <TextViewItem
          label={i18n('entities.patientVisit.fields.referralHospital')}
          value={record.referralHospital}
        />

        <TextViewItem
          label={i18n('entities.patientVisit.fields.referredDoctor')}
          value={record.referredDoctor}
        />

        <TextViewItem
          label={i18n('entities.patientVisit.fields.returnIn')}
          value={
            record.returnIn &&
            i18n(
              `entities.patientVisit.enumerators.returnIn.${record.returnIn}`,
            )
          }
        />

        <ImagesViewItem
          label={i18n('entities.patientVisit.fields.prescription')}
          value={record.prescription}
        />

        <TextViewItem
          label={i18n('entities.patientVisit.fields.patientCopay')}
          value={record.patientCopay}
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

export default PatientVisitView;
