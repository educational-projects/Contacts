export enum AppRoute {
    Main = '/',
    Contacts = '/contacts',
    Login = '/login',
    Registration = '/registration'
}

export enum APIRoute {
    Contacts = '/contacts',
    Authorization = '/login',
    Registration = '/register'
}

export enum ErrorMessage {
    NewContactError = 'Не удалось добавить контакт, попробуйте еще раз',
    DeleteContactError = 'Не удалось удалить контакт, попробуйте еще раз',
    UpdateContactError = 'Не удалось обновить данные контакта, попробуйте еще раз'
}

export enum AuthorizationStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN'
  }
