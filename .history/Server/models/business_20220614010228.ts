//step 1 - import mongoose
import mongoose from 'mongoose';
const Schema = mongoose.Schema; //alias for mongoose scheme

//step 2 - create a schema that matches the data
const BusinessSchema = new Schema
({

    Name: String,
    Number: String,
    Address: String
},
{
    collection:"business"
});

//step 3 - Export

const Model = mongoose.model("Businesses", BusinessSchema);
export default Model;