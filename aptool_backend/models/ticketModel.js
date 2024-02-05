import mongoose, {Schema, model} from "mongoose";

const tickSchem = new Schema({
    // id: {
    //     type: Number
    // },
    title: {
        type: String,
        required: true
    }, 
    description: {
        type: String,
        required: true
    },
    workedOn: {
        type: Boolean,
        default: false
    }
})

const ticket = mongoose.model("ticket" ,tickSchem);

export default ticket