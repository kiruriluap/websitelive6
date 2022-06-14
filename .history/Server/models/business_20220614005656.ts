import mongoose from 'mongoose';
const Schema = mongoose.Schema; //alias for mongoose scheme

const BusinessSchema = new Schema
({
    Name: String,
    Number: String,
    Address: String
},
{
    collection
})