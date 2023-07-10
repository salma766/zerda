import { Schema, model } from 'mongoose';
import lectureSchema from './lecture.schema.js';

const courseSchema = new Schema({
    title: { type: String },
    description: { type: String },
    images: [String],
    price: { type: String },
    category: {
        type: Schema.ObjectId,
        ref: 'categories'
    },
    formateur: {
        type: Schema.ObjectId,
        ref: 'users'
    },
    lectures:[lectureSchema],
    duration:{ type: String },
    level:{ type: String },
}, { timestamps: true })

const Course = model('courses', courseSchema);

export default Course