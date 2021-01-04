import React from 'react';
import Spinner from 'src/view/shared/Spinner';
import { i18n } from 'src/i18n';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import PatientViewItem from 'src/view/patient/view/PatientViewItem';
import ChronicDiseaseEnumViewItem from 'src/view/chronicDiseaseEnum/view/ChronicDiseaseEnumViewItem';

function MedicalHistoryView(props) {
  const renderView = () => {
    const { record } = props;

    return (
      <div>
        <PatientViewItem
          label={i18n('entities.medicalHistory.fields.patient')}
          value={record.patient}
        />

        <TextViewItem
          label={i18n('entities.medicalHistory.fields.smoking')}
          value={
            record.smoking &&
            i18n(
              `entities.medicalHistory.enumerators.smoking.${record.smoking}`,
            )
          }
        />

        <TextViewItem
          label={i18n('entities.medicalHistory.fields.drugUse')}
          value={
            record.drugUse
              ? i18n('common.yes')
              : i18n('common.no')
          }
        />

        <TextViewItem
          label={i18n('entities.medicalHistory.fields.drink')}
          value={
            record.drink &&
            i18n(
              `entities.medicalHistory.enumerators.drink.${record.drink}`,
            )
          }
        />

        <ChronicDiseaseEnumViewItem
          label={i18n('entities.medicalHistory.fields.chronicDisease1')}
          value={record.chronicDisease1}
        />

        <ChronicDiseaseEnumViewItem
          label={i18n('entities.medicalHistory.fields.chronicDisease2')}
          value={record.chronicDisease2}
        />

        <ChronicDiseaseEnumViewItem
          label={i18n('entities.medicalHistory.fields.chronicDisease3')}
          value={record.chronicDisease3}
        />

        <TextViewItem
          label={i18n('entities.medicalHistory.fields.familyHistory')}
          value={record.familyHistory}
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

export default MedicalHistoryView;
