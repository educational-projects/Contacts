export const RegistrationFormType = {
  Name: {
    label: 'Ваше имя',
    id: 'name',
    type: 'text',
    placeholder: 'Ваше имя',
  },
  Email: {
    label: 'Электронная почта',
    id: 'email',
    type: 'email',
    placeholder: 'Электронная почта',
  },
  Password: {
    label: 'Пароль',
    id: 'password',
    type: 'password',
    placeholder: 'Пароль',
  },
} as const;
