import mongoose from "mongoose";
import 'dotenv/config';

const conn_uri=process.env.MONGO_URI
const db = mongoose.connect(conn_uri, {
    useNewUrlParser: true,
}).then((response) => {
    console.log('Connected to the database...');
    return response;
});

export default db;