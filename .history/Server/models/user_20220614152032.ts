//step 1 - import mongoose
import mongoose, {PassportLocalSchema} from 'mongoose';
const Schema = mongoose.Schema; //alias for mongoose scheme
import passportLocalMongoos

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
    collection:"users"
});

//step 3 - create a model using the schema
const Model = mongoose.model("User", UserSchema);

//step 4 - export the model (this makes the file a module)
export default Model;