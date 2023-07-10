import { Schema, model } from 'mongoose';

const categorySchema = new Schema({
    title: { type: String },
    description: { type: String },
}, { timestamps: true })

const Category = model('categories', categorySchema);

export default Category
