import Permissions from 'src/security/permissions';
import { i18n } from 'src/i18n';
import React from 'react';
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import HistoryIcon from '@material-ui/icons/History';
import SettingsIcon from '@material-ui/icons/Settings';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import config from 'src/config';

const permissions = Permissions.values;

export default [
  {
    path: '/',
    exact: true,
    icon: <DashboardIcon />,
    label: i18n('dashboard.menu'),
    permissionRequired: null,
  },

  config.isPlanEnabled && {
    path: '/plan',
    permissionRequired: permissions.planRead,
    icon: <CreditCardOutlinedIcon />,
    label: i18n('plan.menu'),
  },

  {
    path: '/user',
    label: i18n('user.menu'),
    permissionRequired: permissions.userRead,
    icon: <PersonIcon />,
  },

  {
    path: '/audit-logs',
    icon: <HistoryIcon />,
    label: i18n('auditLog.menu'),
    permissionRequired: permissions.auditLogRead,
  },

  {
    path: '/settings',
    icon: <SettingsIcon />,
    label: i18n('settings.menu'),
    permissionRequired: permissions.settingsEdit,
  },

  {
    path: '/patient',
    permissionRequired: permissions.patientRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.patient.menu'),
  },

  {
    path: '/health-center',
    permissionRequired: permissions.healthCenterRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.healthCenter.menu'),
  },

  {
    path: '/patient-visit',
    permissionRequired: permissions.patientVisitRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.patientVisit.menu'),
  },

  {
    path: '/medicine-enum',
    permissionRequired: permissions.medicineEnumRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.medicineEnum.menu'),
  },

  {
    path: '/diagnostic-enum',
    permissionRequired: permissions.diagnosticEnumRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.diagnosticEnum.menu'),
  },

  {
    path: '/doctor',
    permissionRequired: permissions.doctorRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.doctor.menu'),
  },

  {
    path: '/patient-document',
    permissionRequired: permissions.patientDocumentRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.patientDocument.menu'),
  },

  {
    path: '/medicine-supplies',
    permissionRequired: permissions.medicineSuppliesRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.medicineSupplies.menu'),
  },

  {
    path: '/medicine-inventory',
    permissionRequired: permissions.medicineInventoryRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.medicineInventory.menu'),
  },

  {
    path: '/symptoms-enum',
    permissionRequired: permissions.symptomsEnumRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.symptomsEnum.menu'),
  },

  {
    path: '/medical-history',
    permissionRequired: permissions.medicalHistoryRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.medicalHistory.menu'),
  },

  {
    path: '/chronic-disease-enum',
    permissionRequired: permissions.chronicDiseaseEnumRead,
    icon: <ChevronRightIcon />,
    label: i18n('entities.chronicDiseaseEnum.menu'),
  },
].filter(Boolean);
