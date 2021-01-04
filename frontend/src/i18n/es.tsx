const es = {
  common: {
    or: 'o',
    cancel: 'Cancelar',
    reset: 'Reiniciar',
    save: 'Guardar',
    search: 'Buscar',
    edit: 'Editar',
    remove: 'Eliminar',
    new: 'Nuevo',
    export: 'Exportar a Excel',
    noDataToExport: 'No hay datos para exportar',
    import: 'Importar',
    discard: 'Descartar',
    yes: 'Si',
    no: 'No',
    pause: 'Pausa',
    areYouSure: '¿Estás seguro?',
    view: 'Ver',
    destroy: 'Eliminar',
    mustSelectARow: 'Debe seleccionar una fila',
    start: 'Comienzo',
    end: 'Final',
    select: 'Seleccione',
    continue: 'Continúa',
    filters: 'Filtros',
  },
  app: {
    title: 'Aplicación',
  },
  entities: {
    patient: {
        name: 'patient',
        label: 'Patients',
        menu: 'Patients',
        exporterFileName: 'exportacion_patient',
        list: {
          menu: 'Patients',
          title: 'Patients',
        },
        create: {
          success: 'Patient guardado con éxito',
        },
        update: {
          success: 'Patient guardado con éxito',
        },
        destroy: {
          success: 'Patient eliminado con éxito',
        },
        destroyAll: {
          success: 'Patient(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Patient',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {
          'gender': {
            'Male': 'Male',
            'Female': 'Female',
          },
        },
        new: {
          title: 'Nuevo Patient',
        },
        view: {
          title: 'Ver Patient',
        },
        importer: {
          title: 'Importar Patients',
          fileName: 'patient_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    healthCenter: {
        name: 'healthCenter',
        label: 'HealthCenters',
        menu: 'HealthCenters',
        exporterFileName: 'exportacion_healthCenter',
        list: {
          menu: 'HealthCenters',
          title: 'HealthCenters',
        },
        create: {
          success: 'Health Center guardado con éxito',
        },
        update: {
          success: 'Health Center guardado con éxito',
        },
        destroy: {
          success: 'Health Center eliminado con éxito',
        },
        destroyAll: {
          success: 'Health Center(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Health Center',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'address': 'Address',
          'phoneNumber': 'Phone Number',
          'adminName': 'Admin Name',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        new: {
          title: 'Nuevo Health Center',
        },
        view: {
          title: 'Ver Health Center',
        },
        importer: {
          title: 'Importar HealthCenters',
          fileName: 'healthCenter_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    patientVisit: {
        name: 'patientVisit',
        label: 'PatientVisits',
        menu: 'PatientVisits',
        exporterFileName: 'exportacion_patientVisit',
        list: {
          menu: 'PatientVisits',
          title: 'PatientVisits',
        },
        create: {
          success: 'PatientVisit guardado con éxito',
        },
        update: {
          success: 'PatientVisit guardado con éxito',
        },
        destroy: {
          success: 'PatientVisit eliminado con éxito',
        },
        destroyAll: {
          success: 'PatientVisit(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar PatientVisit',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo PatientVisit',
        },
        view: {
          title: 'Ver PatientVisit',
        },
        importer: {
          title: 'Importar PatientVisits',
          fileName: 'patientVisit_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    medicineEnum: {
        name: 'medicineEnum',
        label: 'Medicines',
        menu: 'Medicines',
        exporterFileName: 'exportacion_medicineEnum',
        list: {
          menu: 'Medicines',
          title: 'Medicines',
        },
        create: {
          success: 'Medicine guardado con éxito',
        },
        update: {
          success: 'Medicine guardado con éxito',
        },
        destroy: {
          success: 'Medicine eliminado con éxito',
        },
        destroyAll: {
          success: 'Medicine(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Medicine',
        },
        fields: {
          id: 'Id',
          'medicineName': 'Medicine Name',
          'keptInStock': 'Kept In Stock',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        new: {
          title: 'Nuevo Medicine',
        },
        view: {
          title: 'Ver Medicine',
        },
        importer: {
          title: 'Importar Medicines',
          fileName: 'medicineEnum_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    diagnosticEnum: {
        name: 'diagnosticEnum',
        label: 'Diagnostic Labs',
        menu: 'Diagnostic Labs',
        exporterFileName: 'exportacion_diagnosticEnum',
        list: {
          menu: 'Diagnostic Labs',
          title: 'Diagnostic Labs',
        },
        create: {
          success: 'Diagnostic Lab guardado con éxito',
        },
        update: {
          success: 'Diagnostic Lab guardado con éxito',
        },
        destroy: {
          success: 'Diagnostic Lab eliminado con éxito',
        },
        destroyAll: {
          success: 'Diagnostic Lab(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Diagnostic Lab',
        },
        fields: {
          id: 'Id',
          'diagnosticName': 'DiagnosticName',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        new: {
          title: 'Nuevo Diagnostic Lab',
        },
        view: {
          title: 'Ver Diagnostic Lab',
        },
        importer: {
          title: 'Importar Diagnostic Labs',
          fileName: 'diagnosticEnum_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    doctor: {
        name: 'doctor',
        label: 'Doctors',
        menu: 'Doctors',
        exporterFileName: 'exportacion_doctor',
        list: {
          menu: 'Doctors',
          title: 'Doctors',
        },
        create: {
          success: 'Doctor guardado con éxito',
        },
        update: {
          success: 'Doctor guardado con éxito',
        },
        destroy: {
          success: 'Doctor eliminado con éxito',
        },
        destroyAll: {
          success: 'Doctor(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Doctor',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'specialization': 'Specialization',
          'user': 'User',
          'phone': 'Phone',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        new: {
          title: 'Nuevo Doctor',
        },
        view: {
          title: 'Ver Doctor',
        },
        importer: {
          title: 'Importar Doctors',
          fileName: 'doctor_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    patientDocument: {
        name: 'patientDocument',
        label: 'Patient Documents',
        menu: 'Patient Documents',
        exporterFileName: 'exportacion_patientDocument',
        list: {
          menu: 'Patient Documents',
          title: 'Patient Documents',
        },
        create: {
          success: 'Patient Document guardado con éxito',
        },
        update: {
          success: 'Patient Document guardado con éxito',
        },
        destroy: {
          success: 'Patient Document eliminado con éxito',
        },
        destroyAll: {
          success: 'Patient Document(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Patient Document',
        },
        fields: {
          id: 'Id',
          'patient': 'Patient',
          'image': 'Image',
          'reportName': 'Report Name',
          'reportDateRange': 'Report Date',
          'reportDate': 'Report Date',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        new: {
          title: 'Nuevo Patient Document',
        },
        view: {
          title: 'Ver Patient Document',
        },
        importer: {
          title: 'Importar Patient Documents',
          fileName: 'patientDocument_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    medicineSupplies: {
        name: 'medicineSupplies',
        label: 'MedicineSupplies',
        menu: 'MedicineSupplies',
        exporterFileName: 'exportacion_medicineSupplies',
        list: {
          menu: 'MedicineSupplies',
          title: 'MedicineSupplies',
        },
        create: {
          success: 'Medicine Supplies guardado con éxito',
        },
        update: {
          success: 'Medicine Supplies guardado con éxito',
        },
        destroy: {
          success: 'Medicine Supplies eliminado con éxito',
        },
        destroyAll: {
          success: 'Medicine Supplies(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Medicine Supplies',
        },
        fields: {
          id: 'Id',
          'medicine': 'Medicine',
          'inventoryAddDateRange': 'Date Added to Inventory',
          'inventoryAddDate': 'Date Added to Inventory',
          'countRange': 'Count',
          'count': 'Count',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        new: {
          title: 'Nuevo Medicine Supplies',
        },
        view: {
          title: 'Ver Medicine Supplies',
        },
        importer: {
          title: 'Importar MedicineSupplies',
          fileName: 'medicineSupplies_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    medicineInventory: {
        name: 'medicineInventory',
        label: 'MedicineInventories',
        menu: 'MedicineInventories',
        exporterFileName: 'exportacion_medicineInventory',
        list: {
          menu: 'MedicineInventories',
          title: 'MedicineInventories',
        },
        create: {
          success: 'Medicine Inventory guardado con éxito',
        },
        update: {
          success: 'Medicine Inventory guardado con éxito',
        },
        destroy: {
          success: 'Medicine Inventory eliminado con éxito',
        },
        destroyAll: {
          success: 'Medicine Inventory(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Medicine Inventory',
        },
        fields: {
          id: 'Id',
          'medicine': 'Medicine',
          'inventoryDateRange': 'Inventory Date',
          'inventoryDate': 'Inventory Date',
          'countRange': 'Count',
          'count': 'Count',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        new: {
          title: 'Nuevo Medicine Inventory',
        },
        view: {
          title: 'Ver Medicine Inventory',
        },
        importer: {
          title: 'Importar MedicineInventories',
          fileName: 'medicineInventory_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    symptomsEnum: {
        name: 'symptomsEnum',
        label: 'SymptomsEnums',
        menu: 'SymptomsEnums',
        exporterFileName: 'exportacion_symptomsEnum',
        list: {
          menu: 'SymptomsEnums',
          title: 'SymptomsEnums',
        },
        create: {
          success: 'SymptomsEnum guardado con éxito',
        },
        update: {
          success: 'SymptomsEnum guardado con éxito',
        },
        destroy: {
          success: 'SymptomsEnum eliminado con éxito',
        },
        destroyAll: {
          success: 'SymptomsEnum(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar SymptomsEnum',
        },
        fields: {
          id: 'Id',
          'symptomName': 'SymptomName',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        new: {
          title: 'Nuevo SymptomsEnum',
        },
        view: {
          title: 'Ver SymptomsEnum',
        },
        importer: {
          title: 'Importar SymptomsEnums',
          fileName: 'symptomsEnum_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    medicalHistory: {
        name: 'medicalHistory',
        label: 'MedicalHistories',
        menu: 'MedicalHistories',
        exporterFileName: 'exportacion_medicalHistory',
        list: {
          menu: 'MedicalHistories',
          title: 'MedicalHistories',
        },
        create: {
          success: 'Medical History guardado con éxito',
        },
        update: {
          success: 'Medical History guardado con éxito',
        },
        destroy: {
          success: 'Medical History eliminado con éxito',
        },
        destroyAll: {
          success: 'Medical History(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Medical History',
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
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
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
          title: 'Nuevo Medical History',
        },
        view: {
          title: 'Ver Medical History',
        },
        importer: {
          title: 'Importar MedicalHistories',
          fileName: 'medicalHistory_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },

    chronicDiseaseEnum: {
        name: 'chronicDiseaseEnum',
        label: 'ChronicDiseases',
        menu: 'ChronicDiseases',
        exporterFileName: 'exportacion_chronicDiseaseEnum',
        list: {
          menu: 'ChronicDiseases',
          title: 'ChronicDiseases',
        },
        create: {
          success: 'Chronic Disease guardado con éxito',
        },
        update: {
          success: 'Chronic Disease guardado con éxito',
        },
        destroy: {
          success: 'Chronic Disease eliminado con éxito',
        },
        destroyAll: {
          success: 'Chronic Disease(s) eliminado con éxito',
        },
        edit: {
          title: 'Editar Chronic Disease',
        },
        fields: {
          id: 'Id',
          'diseaseName': 'Disease Name',
          createdAt: 'Creado el',
          updatedAt: 'Actualizado el',
          createdAtRange: 'Creado el',
        },
        enumerators: {

        },
        new: {
          title: 'Nuevo Chronic Disease',
        },
        view: {
          title: 'Ver Chronic Disease',
        },
        importer: {
          title: 'Importar ChronicDiseases',
          fileName: 'chronicDiseaseEnum_import_template',
          hint:
            'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio.',
        },
      },
  },
  auth: {
    tenants: 'Espacios de trabajo',
    profile: {
      title: 'Perfil',
      success: 'Perfil actualizado con éxito',
    },
    createAnAccount: 'Crea una cuenta',
    rememberMe: 'Recuérdame',
    forgotPassword: 'Se te olvidó tu contraseña',
    signin: 'Iniciar Sesión',
    signup: 'Registrarse',
    signout: 'Desconectar',
    alreadyHaveAnAccount:
      '¿Ya tienes una cuenta? Registrarse.',
    signinWithAnotherAccount:
      'Inicia sesión con otra cuenta',
    passwordChange: {
      title: 'Cambia la contraseña',
      success: 'Contraseña cambiada correctamente',
      mustMatch: 'Las contraseñas deben coincidir',
    },
    emailUnverified: {
      message:
        'Confirme su correo electrónico en <strong>{0}</strong> para continuar.',
      submit: 'Reenviar verificación de correo electrónico',
    },
    emptyPermissions: {
      message:
        'Aún no tienes permisos. Espera a que el administrador te otorgue privilegios.',
    },
    passwordResetEmail: {
      message:
        'Enviar contraseña restablecer correo electrónico',
      error: 'Correo electrónico no reconocido',
    },
    passwordReset: {
      message: 'Restablecer la contraseña',
    },
    emailAddressVerificationEmail: {
      error: 'Correo electrónico no reconocido',
    },
    verificationEmailSuccess:
      'Correo electrónico de verificación enviado con éxito',
    passwordResetEmailSuccess:
      'Correo electrónico de restablecimiento de contraseña enviado correctamente',
    passwordResetSuccess:
      'Contraseña cambiada correctamente',
    verifyEmail: {
      success: 'Correo electrónico verificado con éxito.',
      message:
        'Solo un momento, su correo electrónico está siendo verificado ...',
    },
  },
  tenant: {
    name: 'inquilino',
    label: 'Espacios de trabajo',
    menu: 'Espacios de trabajo',
    list: {
      menu: 'Espacios de trabajo',
      title: 'Espacios de trabajo',
    },
    create: {
      button: 'Crear espacio de trabajo',
      success: 'Espacio de trabajo guardado correctamente',
    },
    update: {
      success: 'Espacio de trabajo guardado correctamente',
    },
    destroy: {
      success: 'Espacio de trabajo eliminado correctamente',
    },
    destroyAll: {
      success:
        'Espacio(s) de trabajo eliminado(s) correctamente',
    },
    edit: {
      title: 'Editar espacio de trabajo',
    },
    fields: {
      id: 'Id',
      name: 'Nombre',
      url: 'URL',
      tenantName: 'Nombre del espacio de trabajo',
      tenantId: 'Espacio de trabajo',
      tenantUrl: 'URL del espacio de trabajo',
      plan: 'Plan',
    },
    enumerators: {},
    new: {
      title: 'Nuevo espacio de trabajo',
    },
    invitation: {
      view: 'Ver invitaciones',
      invited: 'Invitado',
      accept: 'Aceptar la invitacion',
      decline: 'Rechazar invitación',
      declined: 'Invitación rechazada con éxito',
      acceptWrongEmail:
        'Aceptar invitación con este correo electrónico',
    },
    select: 'Seleccionar espacio de trabajo',
    validation: {
      url:
        'La URL de su espacio de trabajo solo puede contener letras minúsculas, números y guiones (y debe comenzar con una letra o número).',
    },
  },
  roles: {
    admin: {
      label: 'Administración',
      description: 'Acceso total a todos los recursos.',
    },
    custom: {
      label: 'Rol personalizado',
      description: 'Acceso personalizado a recursos',
    },
  },
  user: {
    invite: 'Invitación',
    title: 'Usuarios',
    menu: 'Usuarios',
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nombre completo',
      firstName: 'Nombre',
      lastName: 'Apellido',
      status: 'Estado',
      disabled: 'Discapacitado',
      phoneNumber: 'Número de teléfono',
      role: 'Rol',
      createdAt: 'Creado el',
      updatedAt: 'Actualizado el',
      roleUser: 'Rol/Usuario',
      roles: 'Roles',
      createdAtRange: 'Creado el',
      password: 'Contraseña',
      rememberMe: 'Recuérdame',
      oldPassword: 'Contraseña anterior',
      newPassword: 'Nueva contraseña',
      newPasswordConfirmation:
        'Nueva confirmación de contraseña',
    },
    enabled: 'Habilitado',
    disabled: 'Discapacitado',
    validations: {
      // eslint-disable-next-line
      email: 'El correo electrónico ${value} no es válido',
    },
    disable: 'Inhabilitar',
    enable: 'Habilitar',
    doEnableSuccess: 'Usuario habilitado con éxito',
    doDisableSuccess: 'Usuario deshabilitado con éxito',
    doDisableAllSuccess:
      'Usuario(s) deshabilitado con éxito',
    doEnableAllSuccess:
      'Usuario(s) habilitados correctamente',
    doAddSuccess: 'Usuario(s) guardado correctamente',
    doUpdateSuccess: 'Usuario guardado con éxito',
    status: {
      active: 'Activo',
      invited: 'Invitado',
      'empty-permissions': 'Esperando permisos',
    },
    exporterFileName: 'usuarios_exportacion',
    doDestroySuccess: 'Usuario eliminado con éxito',
    doDestroyAllSelectedSuccess:
      'Usuario(s) eliminado correctamente',
    edit: {
      title: 'Editar Usuario',
    },
    new: {
      title: 'Invitar Usuario(s)',
      titleModal: 'Nuevo Usuario',
      emailsHint:
        'Separe varias direcciones de correo electrónico utilizando el carácter de coma.',
    },
    view: {
      title: 'Ver Usuario',
      activity: 'Actividad',
    },
    importer: {
      title: 'Importar Usuarios',
      fileName: 'users_import_template',
      hint:
        'Las columnas Archivos/Imágenes deben ser las URL de los archivos separados por espacio. Las relaciones deben ser la ID de los registros referenciados separados por espacio. Los roles deben ser los identificadores de roles separados por espacio.',
    },
    errors: {
      userAlreadyExists:
        'El usuario con este correo electrónico ya existe',
      userNotFound: 'Usuario no encontrado',
      disablingHimself: 'No puedes inhabilitarte',
      revokingOwnPermission:
        'No puede revocar su propio permiso de administrador',
    },
  },
  plan: {
    menu: 'Planes',
    title: 'Planes',
    free: {
      label: 'Gratis',
      price: '$0',
    },
    growth: {
      label: 'Crecimiento',
      price: '$10',
    },
    enterprise: {
      label: 'Empresa',
      price: '$50',
    },
    pricingPeriod: '/mes',
    current: 'Plan Actual',
    subscribe: 'Suscribir',
    manage: 'Administrar Suscripción',
    cancelAtPeriodEnd:
      'Este plan se cancelará al final del período.',
    somethingWrong:
      'Hay algo mal con su suscripción. Vaya a administrar la suscripción para obtener más detalles.',
    notPlanUser:
      'No eres el administrador de esta suscripción.',
    demoHintHtml:
      'Sugerencia: Use esas <a href="https://stripe.com/docs/testing#cards" target="_blank" rel="noopener noreferrer">tarjetas de prueba</a> para la demostración.',
  },
  auditLog: {
    menu: 'Registros de auditoría',
    title: 'Registros de auditoría',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separe varias entidades con el carácter de coma.',
    fields: {
      id: 'Id',
      timestampRange: 'Período',
      entityName: 'Entidad',
      entityNames: 'Entidades',
      entityId: 'ID de entidad',
      action: 'Acción',
      values: 'Valores',
      timestamp: 'Fecha',
      createdByEmail: 'Email del usuario',
    },
  },
  settings: {
    title: 'Configuraciones',
    menu: 'Configuraciones',
    save: {
      success:
        'Configuración guardada con éxito. La página se volverá a cargar en {0} segundos para que los cambios surtan efecto.',
    },
    fields: {
      primary: 'Color primario',
      secondary: 'Color secundario',
      logos: 'Logo',
      backgroundImages: 'Imágenes de fondo',
      shade: 'Sombra',
    },
  },
  dashboard: {
    menu: 'Tablero',
    message:
      'Esta página utiliza datos falsos solo con fines de demostración. Puede editarlo en frontend/view/dashboard/DashboardPage.ts.',
    charts: {
      day: 'Día',
      red: 'Rojo',
      green: 'Verde',
      yellow: 'Amarillo',
      grey: 'Gris',
      blue: 'Azul',
      orange: 'Naranja',
      months: {
        '1': 'Enero',
        '2': 'Febrero',
        '3': 'Marzo',
        '4': 'Abril',
        '5': 'Mayo',
        '6': 'Junio',
        '7': 'Julio',
      },
      eating: 'Comiendo',
      drinking: 'Bebiendo',
      sleeping: 'Dormiendo',
      designing: 'Diseñando',
      coding: 'Codificando',
      cycling: 'Pedalando',
      running: 'Corriendo',
      customer: 'Cliente',
    },
  },
  errors: {
    '403': 'Lo sentimos, no tienes acceso a esta página',
    '404': 'Lo sentimos, la página que visitaste no existe',
    '500': 'Lo sentimos, el servidor informa un error',
    '429':
      'Demasiadas solicitudes. Por favor, inténtelo de nuevo más tarde.',
    backToHome: 'Volver a Inicio',
    forbidden: {
      message: 'Prohibido',
    },
    validation: {
      message: 'Ocurrió un error',
    },
    defaultErrorMessage: 'Ops, ocurrió un error',
  },
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} no es válido',
      required: '${path} es obligatorio',
      oneOf:
        '${path} debe ser uno de los siguientes valores: ${values}',
      notOneOf:
        '${path} no debe ser uno de los siguientes valores: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} debe ser un ${type}`;
      },
    },
    string: {
      length:
        '${path} debe tener exactamente ${length} caracteres',
      min: '${path} debe tener al menos ${min} caracteres',
      max:
        '${path} debe tener como máximo ${max} caracteres',
      matches:
        '${path} debe coincidir con lo siguiente: "${regex}"',
      email:
        '${path} debe ser un correo electrónico válido',
      url: '${path} debe ser una URL válida',
      trim: '${path} debe ser una cadena recortada',
      lowercase:
        '${path} debe ser una cadena en minúsculas',
      uppercase: '${path} debe ser una cadena en mayúscula',
      selected: '${path} debe estar seleccionado',
    },
    number: {
      min: '${path} debe ser mayor o igual que ${min}',
      max: '${path} debe ser menor o igual que ${max}',
      lessThan: '${path} debe ser menor que ${less}',
      moreThan: '${path} debe ser mayor que ${more}',
      notEqual: '${path} no debe ser igual a ${notEqual}',
      positive: '${path} debe ser un número positivo',
      negative: '${path} debe ser un número negativo',
      integer: '${path} debe ser un número entero',
    },
    date: {
      min: 'El campo ${path} debe ser posterior a ${min}',
      max: 'El campo ${path} debe ser anterior a ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        'El campo ${path} no puede tener claves no especificadas en la forma del objeto',
    },
    array: {
      min:
        'El campo ${path} debe tener al menos ${min} elementos',
      max:
        'El campo ${path} debe tener elementos menores o iguales a ${max}',
    },
  },
  fileUploader: {
    upload: 'Subir',
    image: 'Debes subir una imagen',
    size:
      'El archivo es muy grande. El tamaño máximo permitido es {0}',
    formats: 'Formato inválido. Debe ser uno de: {0}.',
  },
  importer: {
    line: 'Línea',
    status: 'Estado',
    pending: 'Pendiente',
    imported: 'Importado',
    error: 'Error',
    total: '{0} importado, {1} pendiente y {2} con error',
    importedMessage: 'Procesado {0} de {1}.',
    noNavigateAwayMessage:
      'No navegue fuera de esta página o la importación se detendrá.',
    completed: {
      success:
        'Importación completada. Todas las filas se importaron correctamente.',
      someErrors:
        'Procesamiento completado, pero algunas filas no se pudieron importar.',
      allErrors:
        'Importación fallida. No hay filas válidas.',
    },
    form: {
      downloadTemplate: 'Descargar la plantilla',
      hint:
        'Haga clic o arrastre el archivo a esta área para continuar.',
    },
    list: {
      discardConfirm:
        '¿Estás seguro? Los datos no importados se perderán.',
    },
    errors: {
      invalidFileEmpty: 'El archivo esta vacio',
      invalidFileExcel:
        'Solo se permiten archivos de Excel(.xlsx)',
      invalidFileUpload:
        'Archivo inválido. Asegúrese de estar utilizando la última versión de la plantilla.',
      importHashRequired: 'Se requiere hash de importación',
      importHashExistent:
        'Los datos ya han sido importados',
    },
  },

  autocomplete: {
    loading: 'Cargando...',
    noOptions: 'Datos no encontrados',
  },
  imagesViewer: {
    noImage: 'Sin imágen',
  },
  table: {
    noData: 'No se encontraron registros',
    loading: 'Cargando...',
  },
  pagination: {
    labelDisplayedRows: '{0}-{1} de {2}',
    labelRowsPerPage: 'Por página:',
  },
};

export default es;
