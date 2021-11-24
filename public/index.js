import dotenv from 'dotenv';
import app from '../bootstrap/app.js';

dotenv.config();

app.listen(process.env.APP_PORT, () => {
    console.log(`Server running at ${process.env.APP_PORT}`);
});