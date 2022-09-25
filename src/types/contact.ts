import { APIQuery } from '../const';

export interface Contact {
  id: number;
  name: string;
  phone: string;
  company: string;
}

export interface NewContact {
  name: string;
  phone: string;
  company: string;
}

export interface ContactsState {
  contacts: Contact[];
  isContactsLoading: boolean;
  isContactsError: boolean;
  isSendContactLoading: boolean;
  isSendContactError: boolean;
  isDeleteContactLoading: boolean;
  isDeleteContactError: boolean;
  isUpdateContactLoading: boolean;
  isUpdateContactError: boolean;
}

export interface sendNewContactProps extends NewContact {
  callback: () => void;
}

export interface UpdateContactProps extends Contact {
  callback: () => void;
}

export interface DeleteContactProps {
  id: number;
  callback: () => void;
}

export interface Query {
  [APIQuery.FullText]: string
}
