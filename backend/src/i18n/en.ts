/**
 * I18n dictionary for the en.
 */

const en = {
  app: {
    title: 'Kolkata Foundation Medical',
  },

  auth: {
    userNotFound: `Sorry, we don't recognize your credentials`,
    wrongPassword: `Sorry, we don't recognize your credentials`,
    weakPassword: 'This password is too weak',
    emailAlreadyInUse: 'Email is already in use',
    invalidEmail: 'Please provide a valid email',
    passwordReset: {
      invalidToken:
        'Password reset link is invalid or has expired',
      error: `Email not recognized`,
    },
    emailAddressVerificationEmail: {
      invalidToken:
        'Email verification link is invalid or has expired.',
      error: `Email not recognized.`,
      signedInAsWrongUser: `This email confirmation was sent to {0} but you're signed in as {1}.`,
    },
    passwordChange: {
      invalidPassword: 'The old password is invalid',
    },
  },

  user: {
    errors: {
      userAlreadyExists:
        'User with this email already exists.',
      userNotFound: 'User not found.',
      destroyingHimself: `You can't delete yourself.`,
      revokingOwnPermission: `You can't revoke your own admin permission.`,
      revokingPlanUser: `You can't revoke the admin permission of the plan manager.`,
      destroyingPlanUser: `You can't delete the plan manager.`,
    },
  },

  tenant: {
    exists:
      'There is already a NGO on this application.',
    url: {
      exists: 'This NGO URL is already in use.',
    },
    invitation: {
      notSameEmail: `This invitation was sent to {0} but you're signed in as {1}.`,
    },
    planActive: `There is a plan active for this NGO. Please cancel the plan first.`,
    stripeNotConfigured: 'Stripe is not configured.',
  },

  importer: {
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

  errors: {
    notFound: {
      message: 'Not Found',
    },
    forbidden: {
      message: 'Forbidden',
    },
    validation: {
      message: 'An error occurred',
    },
  },

  email: {
    error: `Email provider is not configured.`,
  },

  preview: {
    error:
      'Sorry, this operation is not allowed on preview mode.',
  },

  entities: {
    patient: {
      errors: {
        unique: {

        }
      }
    },
    healthCenter: {
      errors: {
        unique: {

        }
      }
    },
    patientVisit: {
      errors: {
        unique: {

        }
      }
    },
    medicineEnum: {
      errors: {
        unique: {
          medicineName: 'Medicine Name must be unique',
        }
      }
    },
    diagnosticEnum: {
      errors: {
        unique: {
          diagnosticName: 'DiagnosticName must be unique',
        }
      }
    },
    doctor: {
      errors: {
        unique: {
          name: 'Name must be unique',
        }
      }
    },
    patientDocument: {
      errors: {
        unique: {

        }
      }
    },
    medicineSupplies: {
      errors: {
        unique: {

        }
      }
    },
    medicineInventory: {
      errors: {
        unique: {

        }
      }
    },
    symptomsEnum: {
      errors: {
        unique: {
          symptomName: 'SymptomName must be unique',
        }
      }
    },
    medicalHistory: {
      errors: {
        unique: {

        }
      }
    },
    chronicDiseaseEnum: {
      errors: {
        unique: {
          diseaseName: 'Disease Name must be unique',
        }
      }
    },
  }
};

export default en;
