import { Schema } from 'mongoose';

const reponseSchema = new Schema({
    text: { type: String },
    correct: { type: Boolean },
})

export default reponseSchema
