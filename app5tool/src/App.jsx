import { useEffect, useState } from 'react'
import './App.css'
import TicketList from './components/TicketList'
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from "react-redux";
import { addTicket, addTicketThunk, fetchTicketsThunk } from './store/features/tickets/ticketSlice';

function App() {
  const dispatch = useDispatch();
  const tickets = useSelector(state => state.tickets.tickets)
  console.log(tickets)

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const ticket = {
      // id: nanoid(),
      title: title,
      description: description,
      // workedOn: false
    };
    // dispatch(addTicket(ticket))
    dispatch(addTicketThunk(ticket));
    setTitle("");
    setDescription("");
  }

  useEffect(() => {
    dispatch(fetchTicketsThunk())
  }, [dispatch]);

  return (
    <>
     <form onSubmit={handleSubmit} className="form">
      <label htmlFor='title'>Title</label><br />
      <input name="title" type="text" placeholder="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} /><br /><br />
      <label htmlFor='description'>Description</label><br />
      <textarea name="description" id="description" cols={20} rows={5} placeholder="type description here" value={description} onChange={(e) => setDescription(e.target.value)} ></textarea><br />
      <button>Submit</button>
     </form>

     <TicketList tickets= {tickets} />
    </>
  )
}

export default App
