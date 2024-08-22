import express from 'express';
import studentRoutes from './routes/student.routes.js';
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config();
const app =  express();

app.use(cors()); 
app.use(express.json());
app.use('/api/v1', studentRoutes);

const PORT =  process.env.PORT || 3000;

app.listen(PORT,()=> {
  console.log(`Server is running on port ${PORT}`);
});