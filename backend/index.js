import 'dotenv/config';
import express, { response } from 'express';
import { PORT, URI } from './config.js';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';


const app = express();
app.use(express.json());
app.use("/books", booksRoute);

mongoose.connect(URI)
.then(()=>{
    console.log("MongoDB is connnected successfully");
    app.listen(PORT || 3000, () => {
        console.log(`App is running on port ${PORT}`);
    });
}).catch((error)=>{
    console.log(error);
});


