import Ticket from "../models/ticketModel.js";
// import ticket from "../models/ticketModel.js";

const addTicket = async(req, res) => {
    const {title, description} = req.body;

    try {
        const ticket = new Ticket({
            title,
            description
        })
        const saveTicket = await ticket.save();
        if(saveTicket) {
            res.status(201).send(saveTicket)
        } else {
            console.log("cannot save to database")
        }
    } catch(err) {
        console.log(err);
    }
}

const getTicket = async(req, res) => {
    const allTickets = await Ticket.find();
    try {
        if(allTickets) {
            res.status(201).send(allTickets)
        } else {
            console.log("cannot fetch tickets");
        }
    } catch(err) {
        console.log(err)
    }
}

const updateTicket = async(req, res) => {
    const { id } = req.params;
    try {
        const ticket = await Ticket.findById(id);
        console.log(ticket);
        const updatedTicket = await Ticket.findByIdAndUpdate({_id: id}, {workedOn: !ticket.workedOn}, {new: true});
        res.status(201).send(updatedTicket)
    } catch(err) {
        console.log(err)
    }
}

const removeTicket = async(req, res) => {
    const { id } = req.params;
    try {
        const delTicket = await Ticket.findByIdAndDelete(id);
        res.status(201).send(delTicket);
    } catch(err) {
        console.log(err)
    }
}


export default {
    addTicket,
    getTicket, 
    updateTicket,
    removeTicket
}

