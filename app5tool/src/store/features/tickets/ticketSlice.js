import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    tickets: [
        // {id:1, title:"one", description:"me", workedOn: "false"}, 
        // {id:2, title:"two", description:"you", workedOn: "false"}
    ],
    loading: false,
    error: null,
}

export const addTicketThunk = createAsyncThunk("tickets/addTicket", async(ticket) =>{
    try {
        const res = await fetch("http://localhost:9000/api/tickets", {
            method: "POST",
            body: JSON.stringify(ticket),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json();
        console.log(data);
        return data;
    } catch(error) {
        console.log(error)
    }
})

export const fetchTicketsThunk = createAsyncThunk("tickets/fetchTicket", async(tickets) =>{
    try {
        const res = await fetch("http://localhost:9000/api/tickets");
        const data = await res.json(tickets);
        console.log(data);
        return data;
    } catch(error) {
        console.log(error)
    }
})

export const updateTicketThunk = createAsyncThunk("tickets/updateTicket", async(_id) =>{
    try {
        const res = await fetch(`http://localhost:9000/api/tickets/${_id}`, {
            method: "PUT",
            body: JSON.stringify(),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json();
        console.log(data);
        return data;
    } catch(error) {
        console.log(error)
    }
})

export const removeTicketThunk = createAsyncThunk("tickets/deleteTickets", async(_id) =>{
    try {
        const res = await fetch(`http://localhost:9000/api/tickets/${_id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json();
        console.log(data);
        return data;
    } catch(error) {
        console.log(error)
    }
})


const ticketSlice = createSlice({
    name: "tickets",
    initialState,
    reducers: {
        addTicket: (state, action) => {
            state.tickets.push(action.payload)
        },

        deleteTicket: (state, action) => {
            state.tickets = state.tickets.filter((ticket) => ticket.id !== action.payload )
        }, 
        updateTicket: (state,  action) => {
            state.tickets = state.tickets.map(ticket => ticket.id === action.payload? {...ticket, workedOn: !ticket.workedOn} : ticket)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addTicketThunk.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(addTicketThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.tickets.push(action.payload);
        })
        .addCase(addTicketThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })

        .addCase(fetchTicketsThunk.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(fetchTicketsThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.tickets = action.payload;
        })
        .addCase(fetchTicketsThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })

        .addCase(updateTicketThunk.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(updateTicketThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.tickets = state.tickets.map((t) => t._id === action.payload._id ? action.payload : t);
        })
        .addCase(updateTicketThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })

        .addCase(removeTicketThunk.pending, (state, action) => {
            state.loading = true;
        })
        .addCase(removeTicketThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.tickets = state.tickets.filter((t) => t._id !== action.payload._id);
        })
        .addCase(removeTicketThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
        .addDefaultCase();
    }
})


export const { addTicket, deleteTicket, updateTicket } = ticketSlice.actions;
// export default ticketSlice.reducer
export const ticketReducer = ticketSlice.reducer;
