import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";



const apiContacts = axios.create({
    baseURL:"https://672641e1302d03037e6ceddc.mockapi.io",
});

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkApi) => {
 
      try {
        const {data} = await apiContacts.get("/contacts");;
  
        return data;
 
      } catch (error) {
     
        return thunkApi.rejectWithValue(error.message);
      }
    }
  );

  export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (newContact, thunkApi) => {
 
      try {
        const {data} = await apiContacts.post("contacts", newContact);;
  
        return data;
 
      } catch (error) {
     
        return thunkApi.rejectWithValue(error.message);
      }
    }
  );

  export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (id, thunkApi) => {
 
      try {
        const {data} = await  apiContacts.delete(`/contacts/ ${id}`);
  
        return data;
 
      } catch (error) {
     
        return thunkApi.rejectWithValue(error.message);
      }
    }
  );