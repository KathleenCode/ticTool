import React from 'react';
import Ticket from "./Ticket"

export default function TicketList({tickets}) {
  return (
    <>
     <h1>TicketList</h1>
     <div>
       {
        tickets.map((ticket) => (
            <Ticket ticket={ticket} key={ticket._id} />
        ))
       }
     </div>
    </>
  )
}
