import { Schema } from 'mongoose';
import reponseSchema from './reponse.schema.js';

const questionSchema = new Schema({
    text: { type: String },
    reponses: [reponseSchema],
    duration: { type: Number }
})

export default questionSchema
