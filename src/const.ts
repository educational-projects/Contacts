export enum AppRoute {
    Main = '/',
    Contacts = '/contacts',
    Login = '/login',
    Registration = '/registration'
}

export enum APIRoute {
    Contacts = '/contacts',
    Authorization = '/login',
    Logout = '/logout',
    Registration = '/register',
}

export enum ErrorMessage {
    NewContactError = 'Не удалось добавить контакт, попробуйте еще раз',
    DeleteContactError = 'Не удалось удалить контакт, попробуйте еще раз',
    UpdateContactError = 'Не удалось обновить данные контакта, попробуйте еще раз',
    LoginError = 'не удалось авторизоваться',
    LogoutError = 'не удалось совершить выход'
}

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
  }
