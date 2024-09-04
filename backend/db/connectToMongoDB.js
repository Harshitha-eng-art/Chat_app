import mongoose from "mongoose";

export const connection=()=>
{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"Chat_application_new"
    }).then(()=>
    {
        console.log("Connected to database")
    }).catch(err=>
    {
        console.log(`connection falid${err}`)
    })
}
export default connection