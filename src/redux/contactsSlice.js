import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchContacts,addContact, deleteContact } from "./contactsOps";
import { selectNameFilter } from "./filtersSlice";


const INITIAL_STATE = {
 contacts: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name:"contacts", 
initialState:INITIAL_STATE,
extraReducers: (builder) =>
  builder
.addCase(fetchContacts.pending, (state) => {
  state.isLoading = true;
  state.error = null;
})
.addCase(fetchContacts.fulfilled, (state, action) => {
  state.isLoading = false;
  state.contacts = action.payload.contacts;
})
.addCase(fetchContacts.rejected, (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
})
.addCase(addContact.pending, (state) => {
  state.isLoading = true;
  state.error = null;
})
.addCase(addContact.fulfilled, (state, action) => {
  state.isLoading = false;
  state.items.push(action.payload);
})
.addCase(addContact.rejected, (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
})
.addCase(deleteContact.pending, (state) => {
  state.isLoading = true;
  state.error = null;
})
.addCase(deleteContact.fulfilled, (state, action) => {
  state.loading = false;
  state.error = null;
  state.items = state.items.filter(item => item.id !== action.payload.id);
})
.addCase(deleteContact.rejected, (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
})

});


export const contactsReducer = contactsSlice.reducer;
export const selectContacts = (state) => state.contacts.items;

export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [ selectContacts, selectNameFilter],
   (contacts, filter) => {
     return contacts.filter(contact => contact.name.toLowerCase()
      .includes(filter.toLowerCase()))
   }
  )