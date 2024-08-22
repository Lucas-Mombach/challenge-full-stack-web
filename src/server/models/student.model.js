import connection from '../db.js';

class StudentModel {
  static async getAllStudents() {
    try {
      const [results] = await connection.promise().query('SELECT * FROM STUDENT');
      return results;
    } catch (err) {
      throw new Error(`Error fetching all students: ${err.message}`);
    }
  }
  
  static async getStudentByRA(ra) {
    try {
      const [results] = await connection.promise().query('SELECT * FROM STUDENT WHERE RA = ?', [ra]);
      return results[0];
    } catch (err) {
      throw new Error(`Error fetching student by RA: ${err.message}`);
    }
  }
}
export default StudentModel;