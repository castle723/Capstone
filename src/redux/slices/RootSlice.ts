import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        first: "First Name",
        last: "Last Name",
        email: "Email",
        phone_number: "Phone Number",
        company:"Company"
    },
    reducers: {
        chooseFirst: (state, action) => { state.first = action.payload},
        chooseLast: (state, action) => { state.last = action.payload},
        chooseEmail: (state, action) => { state.email = action.payload},
        choosePhone: (state, action) => { state.phone_number = action.payload},
        chooseCompany: (state, action) => { state.company = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseFirst, chooseLast, chooseEmail, choosePhone, chooseCompany} = rootSlice.actions