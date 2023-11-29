import 'dotenv/config';
import express from 'express';
import { PORT, URI } from './config.js';

const app = express();

app.listen(PORT || 3000, (req, res) => {
    console.log(`App is running on port ${PORT}`);
});