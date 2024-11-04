import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts,addContact, deleteContact } from "./contactsOps";



const INITIAL_STATE = {
  contacts: [],
  loading: false,
  error: null,
};


const contactsSlice = createSlice({
  name:"contacts", 
initialState:INITIAL_STATE,

extraReducers: (builder) =>
  builder
.addCase(fetchContacts.pending, state => {
  state.loading = true;
  state.error = null;
})
.addCase(fetchContacts.fulfilled, (state, action) => {
  state.loading = false;
        state.error = null;
        state.contacts = action.payload;
})
.addCase(fetchContacts.rejected, (state, action) => {
  state.loading = false;
  state.error = action.payload;
})
.addCase(addContact.pending, state => {
  state.loading = true;
  state.error = null;
})
.addCase(addContact.fulfilled, (state, action) => {
  state.loading = false;
  state.error = null;
  state.contacts.push(action.payload);
})
.addCase(addContact.rejected, (state, action) => {
  state.loading = false;
  state.error = action.payload;
})
.addCase(deleteContact.pending, state => {
  state.loading = true;
  state.error = null;
})
.addCase(deleteContact.fulfilled, (state, action) => {
  state.loading = false;
  state.error = null;
  state.contacts = state.contacts.filter(contact => contact.id !== action.payload.id);
})
.addCase(deleteContact.rejected, (state, action) => {
  state.loading = false;
  state.error = action.payload;
})

});


export const contactsReducer = contactsSlice.reducer;
