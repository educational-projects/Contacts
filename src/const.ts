export enum AppRoute {
    Main = '/',
    Contacts = '/contacts',
    Login = '/login',
    Registration = '/registration'
}

export enum APIRoute {
    Contacts = 'http://localhost:3001/contacts'
}

export enum ErrorMessage {
    NewContactError = 'Не удалось добавить контакт, попробуйте еще раз',
    DeleteContactError = 'Не удалось удалить контакт, попробуйте еще раз'
}
