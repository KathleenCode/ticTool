import { configureStore } from "@reduxjs/toolkit";
// import ticketReducer from "./features/tickets/ticketSlice";
import {ticketReducer} from "./features/tickets/ticketSlice";


export const store = configureStore({
    reducer: {
        // all reducers here
        tickets: ticketReducer
    }
})