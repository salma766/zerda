import { Schema, model } from 'mongoose';

const participationSchema = new Schema({
    course: {
        type: Schema.ObjectId,
        ref: 'courses'
    },
    etudiant: {
        type: Schema.ObjectId,
        ref: 'users'
    },
    formateur: {
        type: Schema.ObjectId,
        ref: 'users'
    },
    approved: { type: String },
}, { timestamps: true })

const Participation = model('participations', participationSchema);

export default Participation