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

  async getStudentByRA(req, res) {
    const ra = req.params.RA;
    try {
      console.log("Called student with ra: ",ra);
      const student = await StudentModel.getStudentByRA(ra);
      res.json(student);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  async createStudent(req, res) {
    const newStudent = req.body;
    try {
      const student = await StudentModel.createStudent(newStudent);
      res.json(student);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
};  
export default new studentController();