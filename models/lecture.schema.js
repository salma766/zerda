import { Schema } from 'mongoose';

const lectureSchema = new Schema({
    title: { type: String },
    description: { type: String },
    attachments: [String]
})

export default lectureSchema
