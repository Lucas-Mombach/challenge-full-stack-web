import StudentModel from '../models/student.model.js';

class studentController{
  async getAllStudents(req, res) {
    try {
      const students = await StudentModel.getAllStudents();
      res.json(students);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
};  
export default new studentController();