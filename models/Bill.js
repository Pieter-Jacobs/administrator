import mongoose from 'mongoose';

const billSchema = new mongoose.Schema({
     number: Number,
     text: String
});

export const Bill = mongoose.model('Bill', billSchema);