import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { toast } from 'react-toastify';
import { RootState } from '..';
import { APIRoute, ErrorMessage } from '../../const';
import { Contact, NewContact } from '../../types/contact';

interface ContactsState {
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

interface sendNewContact extends NewContact {
  callback: () => void;
}

interface UpdateContact extends Contact {
  callback: () => void;
}

interface DeleteContactProps {
  id: number;
  callback: () => void;
}

export const fetchContacts = createAsyncThunk<
Contact[],
undefined,
{
  state: RootState;
  extra: AxiosInstance;
}
  >(
    'contacts/fetchContacts',
    async (_, { extra: api }) => {
      const { data } = await api.get<Contact[]>(APIRoute.Contacts);
      return data;
    },
  );

export const sendNewContact = createAsyncThunk<
  Contact,
  sendNewContact,
  {
    state: RootState;
    extra: AxiosInstance;
  }
>(
  'data/sendNewContact',
  async (
    {
      name, company, phone, callback,
    }: sendNewContact,
    { extra: api },
  ) => {
    try {
      const { data } = await api.post<Contact>(APIRoute.Contacts, {
        name,
        company,
        phone,
      });

      callback();

      return data;
    } catch (error) {
      toast.error(ErrorMessage.NewContactError);
      throw error;
    }
  },
);

export const deleteContact = createAsyncThunk<
  number,
  DeleteContactProps,
  {
    state: RootState;
    extra: AxiosInstance;
  }
>(
  'data/deleteContact',
  async (
    {
      id,
      callback,
    }: DeleteContactProps,
    { extra: api },
  ) => {
    try {
      await api.delete(`${APIRoute.Contacts}/${id}`);
      callback();

      return id;
    } catch (error) {
      toast.error(ErrorMessage.DeleteContactError);
      throw error;
    }
  },
);

export const UpdateContact = createAsyncThunk<
  Contact,
  UpdateContact,
  {
    state: RootState;
    extra: AxiosInstance;
  }
>(
  'data/UpdateContact',
  async (
    {
      name, company, phone, id, callback,
    }: UpdateContact,
    { extra: api },
  ) => {
    try {
      const { data } = await api.put<Contact>(`${APIRoute.Contacts}/${id}`, {
        name,
        company,
        phone,
        id,
      });

      callback();

      return data;
    } catch (error) {
      toast.error(ErrorMessage.UpdateContactError);
      throw error;
    }
  },
);

const initialState: ContactsState = {
  contacts: [],
  isContactsLoading: false,
  isContactsError: false,
  isSendContactLoading: false,
  isSendContactError: false,
  isDeleteContactLoading: false,
  isDeleteContactError: false,
  isUpdateContactLoading: false,
  isUpdateContactError: false,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isContactsLoading = true;
        state.isContactsError = false;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isContactsLoading = false;
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.isContactsLoading = false;
        state.isContactsError = true;
      })
      .addCase(sendNewContact.pending, (state) => {
        state.isSendContactLoading = true;
        state.isSendContactError = false;
      })
      .addCase(sendNewContact.fulfilled, (state, action) => {
        state.isSendContactLoading = false;
        state.contacts.push(action.payload);
      })
      .addCase(sendNewContact.rejected, (state) => {
        state.isSendContactError = true;
      })
      .addCase(deleteContact.pending, (state) => {
        state.isDeleteContactLoading = true;
        state.isDeleteContactError = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isDeleteContactLoading = false;
        state.contacts = state.contacts.filter((contact) => contact.id !== action.payload);
      })
      .addCase(deleteContact.rejected, (state) => {
        state.isDeleteContactLoading = false;
        state.isDeleteContactError = true;
      })
      .addCase(UpdateContact.pending, (state) => {
        state.isUpdateContactLoading = true;
        state.isUpdateContactError = false;
      })
      .addCase(UpdateContact.fulfilled, (state, action) => {
        const currentContact = state.contacts.findIndex(
          (contact) => contact.id === action.payload.id,
        );

        state.contacts[currentContact] = action.payload;
        state.isUpdateContactLoading = false;
      })
      .addCase(UpdateContact.rejected, (state) => {
        state.isUpdateContactLoading = false;
        state.isUpdateContactError = true;
      });
  },
});

export default contactsSlice.reducer;
