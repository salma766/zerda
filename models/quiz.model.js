import { Schema, model } from 'mongoose';
import questionSchema from './question.schema.js';

const quizSchema = new Schema({
    title: { type: String },
    description: { type: String },
    level: { type: String },
    questions: [questionSchema],
    course: {
        type: Schema.ObjectId,
        ref: 'courses'
    },
}, { timestamps: true })

const Quiz = model('quizzes', quizSchema);

export default Quiz