//step 1 - import mongoose
import mongoose from 'mongoose';
const Schema = mongoose.Schema; //alias for mongoose scheme

const BusinessSchema = new Schema
({

    Name: String,
    Number: String,
    Address: String
},
{
    collection:"business"
});

const Model = mongoose.model("Businesses", BusinessSchema);
export default Model;