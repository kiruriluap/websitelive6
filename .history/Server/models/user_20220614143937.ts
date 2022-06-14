//step 1 - import mongoose
import mongoose from 'mongoose';
const Schema = mongoose.Schema; //alias for mongoose scheme

//step 2 - create a schema that matches the data
const UserSchema = new Schema
({

    DisplayName: String,
    username: String,
    EmailAddress: String,
    Created:
    {
        type: Date,
        default: Date.now()
    },
    updated:
    {
        type: Date,
        default: Date.now()
    }
},
{
    collection:"businesses"
});

//step 3 - create a model using the schema
const Model = mongoose.model("Businesses", UserSchema);

//step 4 - export the model (this makes the file a module)
export default Model;