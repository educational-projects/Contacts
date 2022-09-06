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
}

interface sendNewContact extends NewContact {
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

const initialState: ContactsState = {
  contacts: [],
  isContactsLoading: false,
  isContactsError: false,
  isSendContactLoading: false,
  isSendContactError: false,
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
      });
  },
});

export default contactsSlice.reducer;
