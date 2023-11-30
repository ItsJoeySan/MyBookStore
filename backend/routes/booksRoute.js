import express from "express";
import { MyAnimeBook } from '../models/bookStoreModel.js';

const router = express.Router();

//Crud Operation

// Get/find all the mangas
router.get("/", async (req, res) => {
    try {
        const myMangas = await MyAnimeBook.find({});
        res.status(200).send({
            count: myMangas.length,
            data: myMangas
        });
    } catch (error) {
        console.log(error.message);
        res.status(404).send({message:error.message});
    }
});

//get/find One single book/manga
router.get("/:id", async (req,res) => {
    const {id} = req.params;
    try {
        const myManga = await MyAnimeBook.findById(id);
        if(!myManga){
            return res.status(404).json({message: "Book not found"});
        }
        res.status(200).send(myManga);
    } catch (error) {
        console.log(error.message);
        res.status(404).send({message: error.message});
    }

});


//Create/Insert the manga
router.post("/insert", async (req, res) =>{
    try {
        if(
            !req.body.name ||
            !req.body.author ||
            !req.body.publishYear ||
            !req.body.genre ||
            !req.body.description ||
            !req.body.summary
        ){
            return res.status(400).send({
                message: "Send all required fields.",
            });
        }
        const MyBook = new MyAnimeBook({
            name:  req.body.name,
            author: req.body.author,
            publishYear: req.body.publishYear,
            genre: req.body.genre,
            description: req.body.description,
            summary: req.body.summary
        });
        const theBook = await MyBook.save();
        res.status(201).send({message: "Book uploaded successfully.",
            data: theBook
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
});

//insert multiplebooks
router.post("/insert-many", async (req,res) => {
    try {
        const newBooks = req.body;
        const insertedBooks = await MyAnimeBook.insertMany(newBooks);
        res.status(201).send({message: "Books uploaded successfully."});
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message});
    }
});

//update a book
router.put("/:id", async (req, res) => {
    try{
        const {id} = req.params;

        const updateBook = await MyAnimeBook.findByIdAndUpdate(id,req.body);

        if(!updateBook){
            return res.status(404).json({message: "Book Not found"});
        }
        
        return res.status(200).send({message: "Book updated successfully."});
    } catch(error) {
        console.log(error.message);
        res.status(500).send({message:error.message});    
    }
});

//delete the book
router.delete("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const theBook = await MyAnimeBook.findByIdAndDelete(id);
        if(!theBook){
            return res.status(404).json({message:"Book not found"});
        }
        return res.status(201).send("Book Deleted Successfully.");
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message});
    }
});

export default router;
