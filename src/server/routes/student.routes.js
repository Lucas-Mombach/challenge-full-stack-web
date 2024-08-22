import studentController from '../controllers/student.controller.js'
import express from 'express'

const studentRoutes = express.Router();

studentRoutes.get('/', studentController.getAllStudents);
studentRoutes.get('/:RA', studentController.getStudentByRA);
studentRoutes.post('/', studentController.createStudent); 
studentRoutes.put('/:RA', studentController.updateStudent);
studentRoutes.delete('/:RA', studentController.deleteStudent); 

export default studentRoutes;