import { connectRouter } from 'connected-react-router';
import layout from 'src/modules/layout/layoutReducers';
import auth from 'src/modules/auth/authReducers';
import tenant from 'src/modules/tenant/tenantReducers';
import plan from 'src/modules/plan/planReducers';
import user from 'src/modules/user/userReducers';
import auditLog from 'src/modules/auditLog/auditLogReducers';
import settings from 'src/modules/settings/settingsReducers';
import patient from 'src/modules/patient/patientReducers';
import healthCenter from 'src/modules/healthCenter/healthCenterReducers';
import patientVisit from 'src/modules/patientVisit/patientVisitReducers';
import medicineEnum from 'src/modules/medicineEnum/medicineEnumReducers';
import diagnosticEnum from 'src/modules/diagnosticEnum/diagnosticEnumReducers';
import doctor from 'src/modules/doctor/doctorReducers';
import patientDocument from 'src/modules/patientDocument/patientDocumentReducers';
import medicineSupplies from 'src/modules/medicineSupplies/medicineSuppliesReducers';
import medicineInventory from 'src/modules/medicineInventory/medicineInventoryReducers';
import symptomsEnum from 'src/modules/symptomsEnum/symptomsEnumReducers';
import medicalHistory from 'src/modules/medicalHistory/medicalHistoryReducers';
import chronicDiseaseEnum from 'src/modules/chronicDiseaseEnum/chronicDiseaseEnumReducers';
import { combineReducers } from 'redux';

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    auth,
    tenant,
    plan,
    user,
    auditLog,
    settings,
    patient,
    healthCenter,
    patientVisit,
    medicineEnum,
    diagnosticEnum,
    doctor,
    patientDocument,
    medicineSupplies,
    medicineInventory,
    symptomsEnum,
    medicalHistory,
    chronicDiseaseEnum,
  });
