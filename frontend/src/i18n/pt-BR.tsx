const ptBR = {
  common: {
    or: 'ou',
    cancel: 'Cancelar',
    reset: 'Limpar',
    save: 'Salvar',
    search: 'Buscar',
    edit: 'Editar',
    new: 'Novo',
    export: 'Exportar para Excel',
    noDataToExport: 'Não há dados para exportar',
    import: 'Importar',
    discard: 'Descartar',
    yes: 'Sim',
    no: 'Não',
    pause: 'Pausar',
    areYouSure: 'Tem certeza?',
    view: 'Visualizar',
    destroy: 'Deletar',
    mustSelectARow: 'Selecine uma linha',
    start: 'Inicio',
    end: 'Fim',
    select: 'Selecionar',
    continue: 'Continuar',
    filters: 'Filtros',
  },

  app: {
    title: 'Aplicação',
  },

  entities: {
    patient: {
        name: 'Patient',
        label: 'Patients',
        menu: 'Patients',
        exporterFileName: 'Patient_exportados',
        list: {
          menu: 'Patients',
          title: 'Patients',
        },
        create: {
          success: 'Patient salvo com sucesso',
        },
        update: {
          success: 'Patient salvo com sucesso',
        },
        destroy: {
          success: 'Patient deletado com sucesso',
        },
        destroyAll: {
          success: 'Patient(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {
          'gender': {
            'Male': 'Male',
            'Female': 'Female',
          },
        },
        new: {
          title: 'Novo Patient',
        },
        view: {
          title: 'Visualizar Patient',
        },
        importer: {
          title: 'Importar Patients',
          fileName: 'patient_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    healthCenter: {
        name: 'Health Center',
        label: 'HealthCenters',
        menu: 'HealthCenters',
        exporterFileName: 'Health Center_exportados',
        list: {
          menu: 'HealthCenters',
          title: 'HealthCenters',
        },
        create: {
          success: 'Health Center salvo com sucesso',
        },
        update: {
          success: 'Health Center salvo com sucesso',
        },
        destroy: {
          success: 'Health Center deletado com sucesso',
        },
        destroyAll: {
          success: 'Health Center(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo Health Center',
        },
        view: {
          title: 'Visualizar Health Center',
        },
        importer: {
          title: 'Importar HealthCenters',
          fileName: 'healthCenter_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    patientVisit: {
        name: 'PatientVisit',
        label: 'PatientVisits',
        menu: 'PatientVisits',
        exporterFileName: 'PatientVisit_exportados',
        list: {
          menu: 'PatientVisits',
          title: 'PatientVisits',
        },
        create: {
          success: 'PatientVisit salvo com sucesso',
        },
        update: {
          success: 'PatientVisit salvo com sucesso',
        },
        destroy: {
          success: 'PatientVisit deletado com sucesso',
        },
        destroyAll: {
          success: 'PatientVisit(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo PatientVisit',
        },
        view: {
          title: 'Visualizar PatientVisit',
        },
        importer: {
          title: 'Importar PatientVisits',
          fileName: 'patientVisit_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    medicineEnum: {
        name: 'Medicine',
        label: 'Medicines',
        menu: 'Medicines',
        exporterFileName: 'Medicine_exportados',
        list: {
          menu: 'Medicines',
          title: 'Medicines',
        },
        create: {
          success: 'Medicine salvo com sucesso',
        },
        update: {
          success: 'Medicine salvo com sucesso',
        },
        destroy: {
          success: 'Medicine deletado com sucesso',
        },
        destroyAll: {
          success: 'Medicine(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Medicine',
        },
        fields: {
          id: 'Id',
          'medicineName': 'Medicine Name',
          'keptInStock': 'Kept In Stock',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo Medicine',
        },
        view: {
          title: 'Visualizar Medicine',
        },
        importer: {
          title: 'Importar Medicines',
          fileName: 'medicineEnum_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    diagnosticEnum: {
        name: 'Diagnostic Lab',
        label: 'Diagnostic Labs',
        menu: 'Diagnostic Labs',
        exporterFileName: 'Diagnostic Lab_exportados',
        list: {
          menu: 'Diagnostic Labs',
          title: 'Diagnostic Labs',
        },
        create: {
          success: 'Diagnostic Lab salvo com sucesso',
        },
        update: {
          success: 'Diagnostic Lab salvo com sucesso',
        },
        destroy: {
          success: 'Diagnostic Lab deletado com sucesso',
        },
        destroyAll: {
          success: 'Diagnostic Lab(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Diagnostic Lab',
        },
        fields: {
          id: 'Id',
          'diagnosticName': 'DiagnosticName',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo Diagnostic Lab',
        },
        view: {
          title: 'Visualizar Diagnostic Lab',
        },
        importer: {
          title: 'Importar Diagnostic Labs',
          fileName: 'diagnosticEnum_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    doctor: {
        name: 'Doctor',
        label: 'Doctors',
        menu: 'Doctors',
        exporterFileName: 'Doctor_exportados',
        list: {
          menu: 'Doctors',
          title: 'Doctors',
        },
        create: {
          success: 'Doctor salvo com sucesso',
        },
        update: {
          success: 'Doctor salvo com sucesso',
        },
        destroy: {
          success: 'Doctor deletado com sucesso',
        },
        destroyAll: {
          success: 'Doctor(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo Doctor',
        },
        view: {
          title: 'Visualizar Doctor',
        },
        importer: {
          title: 'Importar Doctors',
          fileName: 'doctor_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    patientDocument: {
        name: 'Patient Document',
        label: 'Patient Documents',
        menu: 'Patient Documents',
        exporterFileName: 'Patient Document_exportados',
        list: {
          menu: 'Patient Documents',
          title: 'Patient Documents',
        },
        create: {
          success: 'Patient Document salvo com sucesso',
        },
        update: {
          success: 'Patient Document salvo com sucesso',
        },
        destroy: {
          success: 'Patient Document deletado com sucesso',
        },
        destroyAll: {
          success: 'Patient Document(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo Patient Document',
        },
        view: {
          title: 'Visualizar Patient Document',
        },
        importer: {
          title: 'Importar Patient Documents',
          fileName: 'patientDocument_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    medicineSupplies: {
        name: 'Medicine Supplies',
        label: 'MedicineSupplies',
        menu: 'MedicineSupplies',
        exporterFileName: 'Medicine Supplies_exportados',
        list: {
          menu: 'MedicineSupplies',
          title: 'MedicineSupplies',
        },
        create: {
          success: 'Medicine Supplies salvo com sucesso',
        },
        update: {
          success: 'Medicine Supplies salvo com sucesso',
        },
        destroy: {
          success: 'Medicine Supplies deletado com sucesso',
        },
        destroyAll: {
          success: 'Medicine Supplies(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo Medicine Supplies',
        },
        view: {
          title: 'Visualizar Medicine Supplies',
        },
        importer: {
          title: 'Importar MedicineSupplies',
          fileName: 'medicineSupplies_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    medicineInventory: {
        name: 'Medicine Inventory',
        label: 'MedicineInventories',
        menu: 'MedicineInventories',
        exporterFileName: 'Medicine Inventory_exportados',
        list: {
          menu: 'MedicineInventories',
          title: 'MedicineInventories',
        },
        create: {
          success: 'Medicine Inventory salvo com sucesso',
        },
        update: {
          success: 'Medicine Inventory salvo com sucesso',
        },
        destroy: {
          success: 'Medicine Inventory deletado com sucesso',
        },
        destroyAll: {
          success: 'Medicine Inventory(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo Medicine Inventory',
        },
        view: {
          title: 'Visualizar Medicine Inventory',
        },
        importer: {
          title: 'Importar MedicineInventories',
          fileName: 'medicineInventory_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    symptomsEnum: {
        name: 'SymptomsEnum',
        label: 'SymptomsEnums',
        menu: 'SymptomsEnums',
        exporterFileName: 'SymptomsEnum_exportados',
        list: {
          menu: 'SymptomsEnums',
          title: 'SymptomsEnums',
        },
        create: {
          success: 'SymptomsEnum salvo com sucesso',
        },
        update: {
          success: 'SymptomsEnum salvo com sucesso',
        },
        destroy: {
          success: 'SymptomsEnum deletado com sucesso',
        },
        destroyAll: {
          success: 'SymptomsEnum(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar SymptomsEnum',
        },
        fields: {
          id: 'Id',
          'symptomName': 'SymptomName',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo SymptomsEnum',
        },
        view: {
          title: 'Visualizar SymptomsEnum',
        },
        importer: {
          title: 'Importar SymptomsEnums',
          fileName: 'symptomsEnum_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    medicalHistory: {
        name: 'Medical History',
        label: 'MedicalHistories',
        menu: 'MedicalHistories',
        exporterFileName: 'Medical History_exportados',
        list: {
          menu: 'MedicalHistories',
          title: 'MedicalHistories',
        },
        create: {
          success: 'Medical History salvo com sucesso',
        },
        update: {
          success: 'Medical History salvo com sucesso',
        },
        destroy: {
          success: 'Medical History deletado com sucesso',
        },
        destroyAll: {
          success: 'Medical History(s) deletado com sucesso',
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
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
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
          title: 'Novo Medical History',
        },
        view: {
          title: 'Visualizar Medical History',
        },
        importer: {
          title: 'Importar MedicalHistories',
          fileName: 'medicalHistory_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    chronicDiseaseEnum: {
        name: 'Chronic Disease',
        label: 'ChronicDiseases',
        menu: 'ChronicDiseases',
        exporterFileName: 'Chronic Disease_exportados',
        list: {
          menu: 'ChronicDiseases',
          title: 'ChronicDiseases',
        },
        create: {
          success: 'Chronic Disease salvo com sucesso',
        },
        update: {
          success: 'Chronic Disease salvo com sucesso',
        },
        destroy: {
          success: 'Chronic Disease deletado com sucesso',
        },
        destroyAll: {
          success: 'Chronic Disease(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Chronic Disease',
        },
        fields: {
          id: 'Id',
          'diseaseName': 'Disease Name',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        new: {
          title: 'Novo Chronic Disease',
        },
        view: {
          title: 'Visualizar Chronic Disease',
        },
        importer: {
          title: 'Importar ChronicDiseases',
          fileName: 'chronicDiseaseEnum_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },
  },
    
  auth: {
    tenants: 'Áreas de Trabalho',
    profile: {
      title: 'Perfil',
      success: 'Perfil atualizado com sucesso',
    },
    createAnAccount: 'Criar uma conta',
    rememberMe: 'Lembrar-me',
    forgotPassword: 'Esqueci minha senha',
    signin: 'Entrar',
    signup: 'Registrar',
    signout: 'Sair',
    alreadyHaveAnAccount: 'Já possui uma conta? Entre.',
    signinWithAnotherAccount: 'Entrar com outra conta',
    emailUnverified: {
      message: `Por favor, confirme seu email em <strong>{0}</strong> para continuar.`,
      submit: `Reenviar confirmação por email`,
    },
    passwordResetEmail: {
      message: 'Enviar email de redefinição de senha',
      error: `Email não encontrado`,
    },
    emptyPermissions: {
      message: `Você ainda não possui permissões. Aguarde o administrador conceder seus privilégios.`,
    },
    passwordReset: {
      message: 'Alterar senha',
    },
    passwordChange: {
      title: 'Mudar a Senha',
      success: 'Senha alterada com sucesso',
      mustMatch: 'Senhas devem ser iguais',
    },
    emailAddressVerificationEmail: {
      error: `Email não encontrado`,
    },
    verificationEmailSuccess: `Verificação de email enviada com sucesso`,
    passwordResetEmailSuccess: `Email de redefinição de senha enviado com sucesso`,
    passwordResetSuccess: `Senha alterada com sucesso`,
    verifyEmail: {
      success: 'Email verificado com sucesso.',
      message:
        'Aguarde um momento, seu email está sendo verificado...',
    },
  },

  roles: {
    admin: {
      label: 'Administrador',
      description: 'Acesso completo a todos os recursos',
    },
    custom: {
      label: 'Perfil Customizado',
      description: 'Acesso customizado',
    },
  },

  user: {
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nome',
      firstName: 'Nome',
      lastName: 'Sobrenome',
      status: 'Estado',
      phoneNumber: 'Telefone',
      role: 'Perfil',
      createdAt: 'Criado em',
      updatedAt: 'Atualizado em',
      roleUser: 'Perfil/Usuário',
      roles: 'Perfis',
      createdAtRange: 'Criado em',
      password: 'Senha',
      oldPassword: 'Senha Antiga',
      newPassword: 'Nova Senha',
      newPasswordConfirmation: 'Confirmação da Nova Senha',
      rememberMe: 'Lembrar-me',
    },
    status: {
      active: 'Ativo',
      invited: 'Convidado',
      'empty-permissions': 'Aguardando Permissões',
    },
    invite: 'Convidar',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} é inválido',
    },
    title: 'Usuários',
    menu: 'Usuários',
    doAddSuccess: 'Usuário(s) salvos com sucesso',
    doUpdateSuccess: 'Usuário salvo com sucesso',
    exporterFileName: 'usuarios_exportados',
    doDestroySuccess: 'Usuário deletado com sucesso',
    doDestroyAllSelectedSuccess:
      'Usuários deletado com sucesso',
    edit: {
      title: 'Editar usuário',
    },
    new: {
      title: 'Novo(s) Usuário(s)',
      titleModal: 'Novo Usuário',
      emailsHint:
        'Separe múltiplos endereços de e-mail usando a vírgula.',
    },
    view: {
      title: 'Visualizar Usuário',
      activity: 'Atividades',
    },
    importer: {
      title: 'Importar Usuários',
      fileName: 'usuarios_template_importacao',
      hint:
        'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
    },
    errors: {
      userAlreadyExists: 'Usuário com este email já existe',
      userNotFound: 'Usuário não encontrado',
      revokingOwnPermission: `Você não pode revogar sua própria permissão de proprietário`,
    },
  },

  tenant: {
    name: 'tenant',
    label: 'Área de Trabalho',
    menu: 'Áreas de Trabalho',
    list: {
      menu: 'Áreas de Trabalho',
      title: 'Áreas de Trabalho',
    },
    create: {
      button: 'Criar Área de Trabalho',
      success: 'Área de Trabalho salva com sucesso',
    },
    update: {
      success: 'Área de Trabalho salva com sucesso',
    },
    destroy: {
      success: 'Área de Trabalho deletada com sucesso',
    },
    destroyAll: {
      success: 'Área(s) de Trabalho deletadas com sucesso',
    },
    edit: {
      title: 'Editar Área de Trabalho',
    },
    fields: {
      id: 'Id',
      name: 'Nome',
      tenantName: 'Nome da Área de Trabalho',
      tenantUrl: 'URL da Área de Trabalho',
      tenantId: 'Área de Trabalho',
      plan: 'Plano',
    },
    enumerators: {},
    new: {
      title: 'Nova Área de Trabalho',
    },
    invitation: {
      view: 'Ver Convites',
      invited: 'Convidado',
      accept: 'Aceitar Convite',
      decline: 'Recusar Convite',
      declined: 'Convite recusado com sucesso',
      acceptWrongEmail: 'Aceitar Convite Com Este Email',
    },
    select: 'Selecionar Área de Trabalho',
    url: {
      exists: 'Esta URL de área de trabalho já está em uso.',
    },
  },

  plan: {
    menu: 'Planos',
    title: 'Planos',

    free: {
      label: 'Gratuito',
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

    pricingPeriod: '/mês',
    current: 'Plano Atual',
    subscribe: 'Assinar',
    manage: 'Gerenciar Assinatura',
    somethingWrong:
      'Há algo errado com sua assinatura. Por favor clique em Gerenciar Assinatura para mais informações.',
    cancelAtPeriodEnd:
      'O plano será cancelado no fim do período.',
    notPlanUser: `Esta assinatura não é controlada por você.`,
  },

  auditLog: {
    menu: 'Registros de Auditoria',
    title: 'Registros de Auditoria',
    exporterFileName: 'registros_autoria_exportados',
    entityNamesHint:
      'Separe múltiplas entidades por vírgula',
    fields: {
      id: 'Id',
      timestampRange: 'Período',
      entityName: 'Entidade',
      entityNames: 'Entidades',
      entityId: 'ID da Entidade',
      action: 'Ação',
      values: 'Valores',
      timestamp: 'Data',
      createdByEmail: 'Email do Usuário',
    },
  },
  settings: {
    title: 'Configurações',
    menu: 'Configurações',
    save: {
      success: 'Configurações salvas com sucesso.',
    },
    fields: {
      primary: 'Cor Primária',
      secondary: 'Cor Secundária',
      shade: 'Tom',
      logos: 'Logo',
      backgroundImages: 'Papel de Parede',
    },
  },
  dashboard: {
    menu: 'Inicial',
    message: `Esta página usa dados falsos apenas para fins de demonstração. Você pode editá-la em frontend/view/dashboard/DashboardPage.ts.`,
    charts: {
      day: 'Dia',
      red: 'Vermelho',
      green: 'Verde',
      yellow: 'Amarelho',
      grey: 'Cinza',
      blue: 'Azul',
      orange: 'Laranja',
      months: {
        1: 'Janeiro',
        2: 'Fevereiro',
        3: 'Março',
        4: 'Abril',
        5: 'Maio',
        6: 'Junho',
        7: 'Julho',
      },
      eating: 'Comendo',
      drinking: 'Bebendo',
      sleeping: 'Dormindo',
      designing: 'Projetando',
      coding: 'Codificando',
      cycling: 'Pedalando',
      running: 'Correndo',
      customer: 'Cliente',
    },
  },
  errors: {
    backToHome: 'Voltar a página inicial',
    403: `Desculpe, você não tem acesso a esta página`,
    404: 'Desculpe, a página que você visitou não existe',
    500: 'Desculpe, o servidor está relatando um erro',
    429: 'Muitas requisições. Por favor, tente novamente mais tarde.',
    forbidden: {
      message: 'Acesso negado',
    },
    validation: {
      message: 'Ocorreu um erro',
    },
    defaultErrorMessage: 'Ops, ocorreu um erro',
  },
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} é inválido',
      required: '${path} é obrigatório',
      oneOf:
        '${path} deve ser um dos seguintes valores: ${values}',
      notOneOf:
        '${path} não deve ser um dos seguintes valores: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} deve ser um ${type}`;
      },
    },
    string: {
      length: '${path} deve possuir ${length} caracteres',
      min:
        '${path} deve possuir ao menos ${min} caracteres',
      max:
        '${path} deve possui no máximo ${max} caracteres',
      matches:
        '${path} deve respeitar o padrão: "${regex}"',
      email: '${path} deve ser um email válido',
      url: '${path} deve ser uma URL válida',
      trim:
        '${path} deve ser uma palavra sem espaços em branco',
      lowercase: '${path} deve ser minúsculo',
      uppercase: '${path} deve ser maiúsculo',
      selected: '${path} deve ser selecionado',
    },
    number: {
      min: '${path} deve ser maior ou igual a ${min}',
      max: '${path} deve ser menor ou igual a ${max}',
      lessThan: '${path} deve ser menor que ${less}',
      moreThan: '${path} deve ser maior que ${more}',
      notEqual: '${path} não deve ser igual a ${notEqual}',
      positive: '${path} deve ser um número positivo',
      negative: '${path} deve ser um número negativo',
      integer: '${path} deve ser um inteiro',
    },
    date: {
      min: '${path} deve ser posterior a ${min}',
      max: '${path} deve ser mais cedo do que ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} não pode ter atributos não especificados no formato do objeto',
    },
    array: {
      min: '${path} deve possuir ao menos ${min} itens',
      max: '${path} deve possuir no máximo ${max} itens',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'Você deve fazer upload de uma imagem',
    size:
      'O arquivo é muito grande. O tamanho máximo permitido é {0}',
    formats: `Formato inválido. Deve ser um destes: {0}.`,
  },
  importer: {
    line: 'Linha',
    status: 'Estado',
    pending: 'Pendente',
    imported: 'Importado',
    error: 'Erro',
    total: `{0} importado, {1} pendente e {2} com erro`,
    importedMessage: `Processados {0} de {1}.`,
    noNavigateAwayMessage:
      'Não saia desta página ou a importação será interrompida.',
    completed: {
      success:
        'Importação concluída. Todas as linhas foram importadas com sucesso.',
      someErrors:
        'O processamento foi concluído, mas algumas linhas não puderam ser importadas.',
      allErrors:
        'Importação falhou. Não há linhas válidas.',
    },
    form: {
      downloadTemplate: 'Baixe o modelo',
      hint:
        'Clique ou arraste o arquivo para esta área para continuar.',
    },
    list: {
      discardConfirm:
        'Você tem certeza? Dados não importados serão perdidos.',
    },
    errors: {
      invalidFileEmpty: 'O arquivo está vazio',
      invalidFileExcel:
        'Apenas arquivos Excel (.xlsx) são permitidos',
      invalidFileUpload:
        'Arquivo inválido. Verifique se você está usando a última versão do modelo.',
      importHashRequired: 'Hash de importação é necessário',
      importHashExistent: 'Dados já foram importados',
    },
  },

  autocomplete: {
    loading: 'Carregando...',
    noOptions: 'Não foram encontrados resultados',
  },

  imagesViewer: {
    noImage: 'Sem imagem',
  },

  table: {
    noData: 'Nenhum Registro Encontrado',
    loading: 'Carregando...',
  },

  pagination: {
    labelDisplayedRows: '{0}-{1} de {2}',
    labelRowsPerPage: 'Por página:',
  },
};

export default ptBR;
