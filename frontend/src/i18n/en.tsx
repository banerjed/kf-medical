const en = {
  common: {
    or: 'or',
    cancel: 'Cancel',
    reset: 'Reset',
    save: 'Save',
    search: 'Search',
    edit: 'Edit',
    new: 'New',
    export: 'Export to Excel',
    noDataToExport: 'No data to export',
    import: 'Import',
    discard: 'Discard',
    yes: 'Yes',
    no: 'No',
    pause: 'Pause',
    areYouSure: 'Are you sure?',
    view: 'View',
    destroy: 'Delete',
    mustSelectARow: 'Must select a row',
    start: 'Start',
    end: 'End',
    select: 'Select',
    continue: 'Continue',
    filters: 'Filters',
  },

  app: {
    title: 'Application',
  },

  entities: {
    patient: {
        name: 'patient',
        label: 'Patients',
        menu: 'Patients',
        exporterFileName: 'patient_export',
        list: {
          menu: 'Patients',
          title: 'Patients',
        },
        create: {
          success: 'Patient successfully saved',
        },
        update: {
          success: 'Patient successfully saved',
        },
        destroy: {
          success: 'Patient successfully deleted',
        },
        destroyAll: {
          success: 'Patient(s) successfully deleted',
        },
        edit: {
          title: 'Edit Patient',
        },
        fields: {
          id: 'Id',
          'firstName': 'FirstName',
          'middleName': 'MiddleName',
          'lastName': 'LastName',
          'fullName': 'Full Name',
          'gender': 'Gender',
          'ageRange': 'Age',
          'age': 'Age',
          'localityName': 'Locality Name',
          'mobileNumber': 'Mobile Phone Number',
          'aadharNumber': 'Aadhar Card Number',
          'dateOfBirthRange': 'Date Of Birth',
          'dateOfBirth': 'Date Of Birth',
          'picture': 'Picture',
          'medicalHistory': 'MedicalHistory',
          'medicalVisits': 'Medical Visits',
          'medicalDocs': 'MedicalDocs',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'gender': {
            'Male': 'Male',
            'Female': 'Female',
          },
        },
        new: {
          title: 'New Patient',
        },
        view: {
          title: 'View Patient',
        },
        importer: {
          title: 'Import Patients',
          fileName: 'patient_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    healthCenter: {
        name: 'healthCenter',
        label: 'HealthCenters',
        menu: 'HealthCenters',
        exporterFileName: 'healthCenter_export',
        list: {
          menu: 'HealthCenters',
          title: 'HealthCenters',
        },
        create: {
          success: 'Health Center successfully saved',
        },
        update: {
          success: 'Health Center successfully saved',
        },
        destroy: {
          success: 'Health Center successfully deleted',
        },
        destroyAll: {
          success: 'Health Center(s) successfully deleted',
        },
        edit: {
          title: 'Edit Health Center',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'address': 'Address',
          'phoneNumber': 'Phone Number',
          'adminName': 'Admin Name',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        new: {
          title: 'New Health Center',
        },
        view: {
          title: 'View Health Center',
        },
        importer: {
          title: 'Import HealthCenters',
          fileName: 'healthCenter_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    patientVisit: {
        name: 'patientVisit',
        label: 'PatientVisits',
        menu: 'PatientVisits',
        exporterFileName: 'patientVisit_export',
        list: {
          menu: 'PatientVisits',
          title: 'PatientVisits',
        },
        create: {
          success: 'PatientVisit successfully saved',
        },
        update: {
          success: 'PatientVisit successfully saved',
        },
        destroy: {
          success: 'PatientVisit successfully deleted',
        },
        destroyAll: {
          success: 'PatientVisit(s) successfully deleted',
        },
        edit: {
          title: 'Edit PatientVisit',
        },
        fields: {
          id: 'Id',
          'patient': 'Patient',
          'medicalCenter': 'Medical Center',
          'doctor': 'Doctor',
          'visitDateRange': 'Visit Date',
          'visitDate': 'Visit Date',
          'symptom1': 'Symptom1',
          'symptom2': 'Symptom2',
          'symptom3': 'Symptom3',
          'otherSymptoms': 'Other Symptoms',
          'vitalStatistics': 'Vital Statistics',
          'diagnosis': 'Diagnosis',
          'requestedLabs': 'Lab Diagnostics',
          'medicine1': 'Medicine #1',
          'med1QtyRange': 'Medicine1 Quantity',
          'med1Qty': 'Medicine1 Quantity',
          'medicine2': 'Medicine #2',
          'med2QtyRange': 'Medicine2 Quantity',
          'med2Qty': 'Medicine2 Quantity',
          'medicine3': 'Medicine #3',
          'med3QtyRange': 'Medicine3 Quantity',
          'med3Qty': 'Medicine3 Quantity',
          'medicine4': 'Medicine #4',
          'med4QtyRange': 'Medicine4 Quantity',
          'med4Qty': 'Medicine4 Quantity',
          'medicineInstructions': 'Medicine Instructions',
          'referralLab': 'Referral Lab',
          'referralHospital': 'Referral Hospital',
          'referredDoctor': 'ReferredDoctor',
          'returnIn': 'Return In',
          'prescription': 'Prescription',
          'patientCopayRange': 'Patient Paid (Rs)',
          'patientCopay': 'Patient Paid (Rs)',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'returnIn': {
            '1week': '1week',
            '2weeks': '2weeks',
            '3weeks': '3weeks',
            '4weeks': '4weeks',
            '6weeks': '6weeks',
            '2months': '2months',
            '3months': '3months',
            '4months': '4months',
            '6months': '6months',
            '1year': '1year',
          },
        },
        new: {
          title: 'New PatientVisit',
        },
        view: {
          title: 'View PatientVisit',
        },
        importer: {
          title: 'Import PatientVisits',
          fileName: 'patientVisit_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    medicineEnum: {
        name: 'medicineEnum',
        label: 'Medicines',
        menu: 'Medicines',
        exporterFileName: 'medicineEnum_export',
        list: {
          menu: 'Medicines',
          title: 'Medicines',
        },
        create: {
          success: 'Medicine successfully saved',
        },
        update: {
          success: 'Medicine successfully saved',
        },
        destroy: {
          success: 'Medicine successfully deleted',
        },
        destroyAll: {
          success: 'Medicine(s) successfully deleted',
        },
        edit: {
          title: 'Edit Medicine',
        },
        fields: {
          id: 'Id',
          'medicineName': 'Medicine Name',
          'keptInStock': 'Kept In Stock',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        new: {
          title: 'New Medicine',
        },
        view: {
          title: 'View Medicine',
        },
        importer: {
          title: 'Import Medicines',
          fileName: 'medicineEnum_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    diagnosticEnum: {
        name: 'diagnosticEnum',
        label: 'Diagnostic Labs',
        menu: 'Diagnostic Labs',
        exporterFileName: 'diagnosticEnum_export',
        list: {
          menu: 'Diagnostic Labs',
          title: 'Diagnostic Labs',
        },
        create: {
          success: 'Diagnostic Lab successfully saved',
        },
        update: {
          success: 'Diagnostic Lab successfully saved',
        },
        destroy: {
          success: 'Diagnostic Lab successfully deleted',
        },
        destroyAll: {
          success: 'Diagnostic Lab(s) successfully deleted',
        },
        edit: {
          title: 'Edit Diagnostic Lab',
        },
        fields: {
          id: 'Id',
          'diagnosticName': 'DiagnosticName',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        new: {
          title: 'New Diagnostic Lab',
        },
        view: {
          title: 'View Diagnostic Lab',
        },
        importer: {
          title: 'Import Diagnostic Labs',
          fileName: 'diagnosticEnum_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    doctor: {
        name: 'doctor',
        label: 'Doctors',
        menu: 'Doctors',
        exporterFileName: 'doctor_export',
        list: {
          menu: 'Doctors',
          title: 'Doctors',
        },
        create: {
          success: 'Doctor successfully saved',
        },
        update: {
          success: 'Doctor successfully saved',
        },
        destroy: {
          success: 'Doctor successfully deleted',
        },
        destroyAll: {
          success: 'Doctor(s) successfully deleted',
        },
        edit: {
          title: 'Edit Doctor',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'specialization': 'Specialization',
          'user': 'User',
          'phone': 'Phone',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        new: {
          title: 'New Doctor',
        },
        view: {
          title: 'View Doctor',
        },
        importer: {
          title: 'Import Doctors',
          fileName: 'doctor_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    patientDocument: {
        name: 'patientDocument',
        label: 'Patient Documents',
        menu: 'Patient Documents',
        exporterFileName: 'patientDocument_export',
        list: {
          menu: 'Patient Documents',
          title: 'Patient Documents',
        },
        create: {
          success: 'Patient Document successfully saved',
        },
        update: {
          success: 'Patient Document successfully saved',
        },
        destroy: {
          success: 'Patient Document successfully deleted',
        },
        destroyAll: {
          success: 'Patient Document(s) successfully deleted',
        },
        edit: {
          title: 'Edit Patient Document',
        },
        fields: {
          id: 'Id',
          'patient': 'Patient',
          'image': 'Image',
          'reportName': 'Report Name',
          'reportDateRange': 'Report Date',
          'reportDate': 'Report Date',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        new: {
          title: 'New Patient Document',
        },
        view: {
          title: 'View Patient Document',
        },
        importer: {
          title: 'Import Patient Documents',
          fileName: 'patientDocument_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    medicineSupplies: {
        name: 'medicineSupplies',
        label: 'MedicineSupplies',
        menu: 'MedicineSupplies',
        exporterFileName: 'medicineSupplies_export',
        list: {
          menu: 'MedicineSupplies',
          title: 'MedicineSupplies',
        },
        create: {
          success: 'Medicine Supplies successfully saved',
        },
        update: {
          success: 'Medicine Supplies successfully saved',
        },
        destroy: {
          success: 'Medicine Supplies successfully deleted',
        },
        destroyAll: {
          success: 'Medicine Supplies(s) successfully deleted',
        },
        edit: {
          title: 'Edit Medicine Supplies',
        },
        fields: {
          id: 'Id',
          'medicine': 'Medicine',
          'inventoryAddDateRange': 'Date Added to Inventory',
          'inventoryAddDate': 'Date Added to Inventory',
          'countRange': 'Count',
          'count': 'Count',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        new: {
          title: 'New Medicine Supplies',
        },
        view: {
          title: 'View Medicine Supplies',
        },
        importer: {
          title: 'Import MedicineSupplies',
          fileName: 'medicineSupplies_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    medicineInventory: {
        name: 'medicineInventory',
        label: 'MedicineInventories',
        menu: 'MedicineInventories',
        exporterFileName: 'medicineInventory_export',
        list: {
          menu: 'MedicineInventories',
          title: 'MedicineInventories',
        },
        create: {
          success: 'Medicine Inventory successfully saved',
        },
        update: {
          success: 'Medicine Inventory successfully saved',
        },
        destroy: {
          success: 'Medicine Inventory successfully deleted',
        },
        destroyAll: {
          success: 'Medicine Inventory(s) successfully deleted',
        },
        edit: {
          title: 'Edit Medicine Inventory',
        },
        fields: {
          id: 'Id',
          'medicine': 'Medicine',
          'inventoryDateRange': 'Inventory Date',
          'inventoryDate': 'Inventory Date',
          'countRange': 'Count',
          'count': 'Count',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        new: {
          title: 'New Medicine Inventory',
        },
        view: {
          title: 'View Medicine Inventory',
        },
        importer: {
          title: 'Import MedicineInventories',
          fileName: 'medicineInventory_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    symptomsEnum: {
        name: 'symptomsEnum',
        label: 'SymptomsEnums',
        menu: 'SymptomsEnums',
        exporterFileName: 'symptomsEnum_export',
        list: {
          menu: 'SymptomsEnums',
          title: 'SymptomsEnums',
        },
        create: {
          success: 'SymptomsEnum successfully saved',
        },
        update: {
          success: 'SymptomsEnum successfully saved',
        },
        destroy: {
          success: 'SymptomsEnum successfully deleted',
        },
        destroyAll: {
          success: 'SymptomsEnum(s) successfully deleted',
        },
        edit: {
          title: 'Edit SymptomsEnum',
        },
        fields: {
          id: 'Id',
          'symptomName': 'SymptomName',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        new: {
          title: 'New SymptomsEnum',
        },
        view: {
          title: 'View SymptomsEnum',
        },
        importer: {
          title: 'Import SymptomsEnums',
          fileName: 'symptomsEnum_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    medicalHistory: {
        name: 'medicalHistory',
        label: 'MedicalHistories',
        menu: 'MedicalHistories',
        exporterFileName: 'medicalHistory_export',
        list: {
          menu: 'MedicalHistories',
          title: 'MedicalHistories',
        },
        create: {
          success: 'Medical History successfully saved',
        },
        update: {
          success: 'Medical History successfully saved',
        },
        destroy: {
          success: 'Medical History successfully deleted',
        },
        destroyAll: {
          success: 'Medical History(s) successfully deleted',
        },
        edit: {
          title: 'Edit Medical History',
        },
        fields: {
          id: 'Id',
          'patient': 'Patient',
          'smoking': 'Smoking',
          'drugUse': 'Drug Use',
          'drink': 'Drink',
          'chronicDisease1': 'ChronicDisease1',
          'chronicDisease2': 'ChronicDisease2',
          'chronicDisease3': 'ChronicDisease3',
          'familyHistory': 'Family History',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {
          'smoking': {
            'None': 'None',
            'Cigarette': 'Cigarette',
            'Bidi': 'Bidi',
            'Ganja': 'Ganja',
            'Multiple': 'Multiple',
            'Other': 'Other',
          },
          'drink': {
            'Occasionally': 'Occasionally',
            'Frequently': 'Frequently',
            'Daily': 'Daily',
          },
        },
        new: {
          title: 'New Medical History',
        },
        view: {
          title: 'View Medical History',
        },
        importer: {
          title: 'Import MedicalHistories',
          fileName: 'medicalHistory_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    chronicDiseaseEnum: {
        name: 'chronicDiseaseEnum',
        label: 'ChronicDiseases',
        menu: 'ChronicDiseases',
        exporterFileName: 'chronicDiseaseEnum_export',
        list: {
          menu: 'ChronicDiseases',
          title: 'ChronicDiseases',
        },
        create: {
          success: 'Chronic Disease successfully saved',
        },
        update: {
          success: 'Chronic Disease successfully saved',
        },
        destroy: {
          success: 'Chronic Disease successfully deleted',
        },
        destroyAll: {
          success: 'Chronic Disease(s) successfully deleted',
        },
        edit: {
          title: 'Edit Chronic Disease',
        },
        fields: {
          id: 'Id',
          'diseaseName': 'Disease Name',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        new: {
          title: 'New Chronic Disease',
        },
        view: {
          title: 'View Chronic Disease',
        },
        importer: {
          title: 'Import ChronicDiseases',
          fileName: 'chronicDiseaseEnum_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },
  },

  auth: {
    tenants: 'Workspaces',
    profile: {
      title: 'Profile',
      success: 'Profile successfully updated',
    },
    createAnAccount: 'Create an account',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password',
    signin: 'Sign in',
    signup: 'Sign up',
    signout: 'Sign out',
    alreadyHaveAnAccount:
      'Already have an account? Sign in.',
    signinWithAnotherAccount:
      'Sign in with another account',
    emailUnverified: {
      message: `Please confirm your email at <strong>{0}</strong> to continue.`,
      submit: `Resend email verification`,
    },
    emptyPermissions: {
      message: `You have no permissions yet. Wait for the admin to grant you privileges.`,
    },
    passwordResetEmail: {
      message: 'Send password reset email',
      error: `Email not recognized`,
    },
    passwordReset: {
      message: 'Reset password',
    },
    passwordChange: {
      title: 'Change Password',
      success: 'Password successfully changed',
      mustMatch: 'Passwords must match',
    },
    emailAddressVerificationEmail: {
      error: `Email not recognized`,
    },
    verificationEmailSuccess: `Verification email successfully sent`,
    passwordResetEmailSuccess: `Password reset email successfully sent`,
    passwordResetSuccess: `Password successfully changed`,
    verifyEmail: {
      success: 'Email successfully verified.',
      message:
        'Just a moment, your email is being verified...',
    },
  },

  roles: {
    admin: {
      label: 'Admin',
      description: 'Full access to all resources',
    },
    custom: {
      label: 'Custom Role',
      description: 'Custom role access',
    },
  },

  user: {
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Name',
      firstName: 'First Name',
      lastName: 'Last Name',
      status: 'Status',
      phoneNumber: 'Phone Number',
      role: 'Role',
      createdAt: 'Created at',
      updatedAt: 'Updated at',
      roleUser: 'Role/User',
      roles: 'Roles',
      createdAtRange: 'Created at',
      password: 'Password',
      oldPassword: 'Old Password',
      newPassword: 'New Password',
      newPasswordConfirmation: 'New Password Confirmation',
      rememberMe: 'Remember me',
    },
    status: {
      active: 'Active',
      invited: 'Invited',
      'empty-permissions': 'Waiting for Permissions',
    },
    invite: 'Invite',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} is invalid',
    },
    title: 'Users',
    menu: 'Users',
    doAddSuccess: 'User(s) successfully saved',
    doUpdateSuccess: 'User successfully saved',
    exporterFileName: 'users_export',
    doDestroySuccess: 'User successfully deleted',
    doDestroyAllSelectedSuccess:
      'Users successfully deleted',
    edit: {
      title: 'Edit User',
    },
    new: {
      title: 'Invite User(s)',
      titleModal: 'Invite User',
      emailsHint:
        'Separate multiple email addresses using the comma character.',
    },
    view: {
      title: 'View User',
      activity: 'Activity',
    },
    importer: {
      title: 'Import Users',
      fileName: 'users_import_template',
      hint:
        'Files/Images columns must be the URLs of the files separated by space. Relationships must be the ID of the referenced records separated by space. Roles must be the role ids separated by space.',
    },
    errors: {
      userAlreadyExists:
        'User with this email already exists',
      userNotFound: 'User not found',
      revokingOwnPermission: `You can't revoke your own admin permission`,
    },
  },

  tenant: {
    name: 'tenant',
    label: 'Workspaces',
    menu: 'Workspaces',
    list: {
      menu: 'Workspaces',
      title: 'Workspaces',
    },
    create: {
      button: 'Create Workspace',
      success: 'Workspace successfully saved',
    },
    update: {
      success: 'Workspace successfully saved',
    },
    destroy: {
      success: 'Workspace successfully deleted',
    },
    destroyAll: {
      success: 'Workspace(s) successfully deleted',
    },
    edit: {
      title: 'Edit Workspace',
    },
    fields: {
      id: 'Id',
      name: 'Name',
      url: 'URL',
      tenantName: 'Workspace Name',
      tenantId: 'Workspace',
      tenantUrl: 'Workspace URL',
      plan: 'Plan',
    },
    enumerators: {},
    new: {
      title: 'New Workspace',
    },
    invitation: {
      view: 'View Invitations',
      invited: 'Invited',
      accept: 'Accept Invitation',
      decline: 'Decline Invitation',
      declined: 'Invitation successfully declined',
      acceptWrongEmail: 'Accept Invitation With This Email',
    },
    select: 'Select Workspace',
    validation: {
      url:
        'Your workspace URL can only contain lowercase letters, numbers and dashes (and must start with a letter or number).',
    },
  },

  plan: {
    menu: 'Plans',
    title: 'Plans',

    free: {
      label: 'Free',
      price: '$0',
    },
    growth: {
      label: 'Growth',
      price: '$10',
    },
    enterprise: {
      label: 'Enterprise',
      price: '$50',
    },

    pricingPeriod: '/month',
    current: 'Current Plan',
    subscribe: 'Subscribe',
    manage: 'Manage Subscription',
    cancelAtPeriodEnd:
      'This plan will be canceled at the end of the period.',
    somethingWrong:
      'There is something wrong with your subscription. Please go to manage subscription for more details.',
    notPlanUser: `You are not the manager of this subscription.`,
  },

  auditLog: {
    menu: 'Audit Logs',
    title: 'Audit Logs',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separate multiple entities using the comma character.',
    fields: {
      id: 'Id',
      timestampRange: 'Period',
      entityName: 'Entity',
      entityNames: 'Entities',
      entityId: 'Entity ID',
      action: 'Action',
      values: 'Values',
      timestamp: 'Date',
      createdByEmail: 'User Email',
    },
  },
  settings: {
    title: 'Settings',
    menu: 'Settings',
    save: {
      success:
        'Settings successfully saved. The page will reload in {0} seconds for changes to take effect.',
    },
    fields: {
      primary: 'Primary Color',
      secondary: 'Secondary Color',
      logos: 'Logo',
      backgroundImages: 'Background Images',
      shade: 'Shade',
    },
  },
  dashboard: {
    menu: 'Dashboard',
    message: `This page uses fake data for demonstration purposes only. You can edit it at frontend/view/dashboard/DashboardPage.ts.`,
    charts: {
      day: 'Day',
      red: 'Red',
      green: 'Green',
      yellow: 'Yellow',
      grey: 'Grey',
      blue: 'Blue',
      orange: 'Orange',
      months: {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
      },
      eating: 'Eating',
      drinking: 'Drinking',
      sleeping: 'Sleeping',
      designing: 'Designing',
      coding: 'Coding',
      cycling: 'Cycling',
      running: 'Running',
      customer: 'Customer',
    },
  },
  errors: {
    backToHome: 'Back to home',
    403: `Sorry, you don't have access to this page`,
    404: 'Sorry, the page you visited does not exist',
    500: 'Sorry, the server is reporting an error',
    429: 'Too many requests. Please try again later.',
    forbidden: {
      message: 'Forbidden',
    },
    validation: {
      message: 'An error occurred',
    },
    defaultErrorMessage: 'Ops, an error occurred',
  },
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} is invalid',
      required: '${path} is required',
      oneOf:
        '${path} must be one of the following values: ${values}',
      notOneOf:
        '${path} must not be one of the following values: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} must be a ${type}`;
      },
    },
    string: {
      length:
        '${path} must be exactly ${length} characters',
      min: '${path} must be at least ${min} characters',
      max: '${path} must be at most ${max} characters',
      matches:
        '${path} must match the following: "${regex}"',
      email: '${path} must be a valid email',
      url: '${path} must be a valid URL',
      trim: '${path} must be a trimmed string',
      lowercase: '${path} must be a lowercase string',
      uppercase: '${path} must be a upper case string',
      selected: '${path} must be selected',
    },
    number: {
      min:
        '${path} must be greater than or equal to ${min}',
      max: '${path} must be less than or equal to ${max}',
      lessThan: '${path} must be less than ${less}',
      moreThan: '${path} must be greater than ${more}',
      notEqual: '${path} must be not equal to ${notEqual}',
      positive: '${path} must be a positive number',
      negative: '${path} must be a negative number',
      integer: '${path} must be an integer',
    },
    date: {
      min: '${path} field must be later than ${min}',
      max: '${path} field must be at earlier than ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} field cannot have keys not specified in the object shape',
    },
    array: {
      min: '${path} field must have at least ${min} items',
      max:
        '${path} field must have less than or equal to ${max} items',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'You must upload an image',
    size: 'File is too big. Max allowed size is {0}',
    formats: `Invalid format. Must be one of: {0}.`,
  },
  importer: {
    line: 'Line',
    status: 'Status',
    pending: 'Pending',
    imported: 'Imported',
    error: 'Error',
    total: `{0} imported, {1} pending and {2} with error`,
    importedMessage: `Processed {0} of {1}.`,
    noNavigateAwayMessage:
      'Do not navigate away from this page or import will be stopped.',
    completed: {
      success:
        'Import completed. All rows were successfully imported.',
      someErrors:
        'Processing completed, but some rows were unable to be imported.',
      allErrors: 'Import failed. There are no valid rows.',
    },
    form: {
      downloadTemplate: 'Download the template',
      hint:
        'Click or drag the file to this area to continue',
    },
    list: {
      discardConfirm:
        'Are you sure? Non-imported data will be lost.',
    },
    errors: {
      invalidFileEmpty: 'The file is empty',
      invalidFileExcel:
        'Only excel (.xlsx) files are allowed',
      invalidFileUpload:
        'Invalid file. Make sure you are using the last version of the template.',
      importHashRequired: 'Import hash is required',
      importHashExistent: 'Data has already been imported',
    },
  },

  autocomplete: {
    loading: 'Loading...',
    noOptions: 'No data found',
  },

  imagesViewer: {
    noImage: 'No image',
  },

  table: {
    noData: 'No records found',
    loading: 'Loading...',
  },

  pagination: {
    labelDisplayedRows: '{0}-{1} of {2}',
    labelRowsPerPage: 'Per page:',
  },
};

export default en;
