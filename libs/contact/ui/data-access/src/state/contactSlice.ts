import { DateTime } from "@open-system/core-typescript-utilities";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialFormValues, initialState } from "../constants";
import { ContactFormValues, ContactState } from "../types";

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    saveFormState(state, action: PayloadAction<ContactFormValues>) {
      state.formValues = { ...action.payload };
      state.createdDateTime = DateTime.current.toString();
    },
    resetFormState(state) {
      state.formValues = { ...initialFormValues };
      state.createdDateTime = initialState.createdDateTime;
    },
  },
});

export const { saveFormState, resetFormState } = contactSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectContact = (state: { contact: ContactState }) =>
  state.contact;
export const selectContactFormValues = (state: { contact: ContactState }) =>
  state.contact.formValues;
export const selectContactFormCreatedDateTime = (state: {
  contact: ContactState;
}): DateTime | null =>
  state.contact.createdDateTime
    ? DateTime.create(state.contact.createdDateTime)
    : null;

export const contactReducer = contactSlice.reducer;