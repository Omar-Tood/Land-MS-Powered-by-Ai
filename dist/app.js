import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectDB } from './src/config/db';
// import userRoutes from './routes/userRoutes';
// import propertyRoutes from './routes/propertyRoutes';
const app = express();
// Middleware
app.use(cors());
app.use(bodyParser.json());
// Routes
app.use('/api/users');
app.use('/api/properties');
// Connect Database
connectDB();
export default app;
