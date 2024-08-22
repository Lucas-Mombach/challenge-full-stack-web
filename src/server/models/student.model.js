class StudentModel {
  static async getAllStudents() {
    try {
      const [results] = await connection.promise().query('SELECT * FROM STUDENT');
      return results;
    } catch (err) {
      throw new Error(`Error fetching all students: ${err.message}`);
    }
  }
  
}
export default StudentModel;