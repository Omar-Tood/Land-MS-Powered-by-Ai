import dotenv from 'dotenv';
import app from './app';
dotenv.config();
const PORT = parseInt(process.env.PORT || '5000', 10);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
