import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        publishYear: {
            type: Number,
            required: true,
        },
        genre : {
            type: [],
            required: true,
        },    
        description: {
            type: String,
            required: true,
        },
        summary: {
            type: String,
            required: true,
        }
    },{
        timestamps: true,
    }
);


export const MyAnimeBook = mongoose.model("MyAnimeBook", bookSchema);
