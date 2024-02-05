import React from 'react';
import "../App.css";
import { RiDeleteBin3Fill } from "react-icons/ri";
import { FaPen } from "react-icons/fa6";
import { updateTicket, deleteTicket, updateTicketThunk, removeTicketThunk } from "../store/features/tickets/ticketSlice";
import { useDispatch} from "react-redux";



export default function Ticket({ticket}) {
    const dispatch = useDispatch();

  return (
    <>
     <h2 >A Ticket </h2>
     <div className="ou" style={ticket.workedOn === false ? {backgroundColor: "#EEF296"} : {backgroundColor: "#FFB7B7"} }>
        <button onClick={() => 
          // dispatch(deleteTicket(ticket._id))
          dispatch(removeTicketThunk(ticket._id))
          } ><RiDeleteBin3Fill />&nbsp; Delete</button>
        <button style={ticket.workedOn === false ? {backgroundColor: "#C1F2B0"} : {backgroundColor: "#9EB384"} } 
        onClick={() => 
        // dispatch(updateTicket(ticket._id))
        dispatch(updateTicketThunk(ticket._id))
        } ><FaPen />&nbsp; {ticket.workedOn === false ? "Update" : "Updated" }</button>
        <p>{ticket.title}</p>
        <p>{ticket.description}</p>
        <p>{ticket.workedOn}</p>
     </div>
    </>
  )
}
