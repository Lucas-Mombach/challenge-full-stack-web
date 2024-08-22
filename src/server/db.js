import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config();

const connection =  mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

async function connectToDatabase() {
  try {
    await new Promise((resolve, reject) => {
      connection.connect((err) => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
    console.log('Connected to the MySQL database as ID', connection.threadId);
  } catch (err) {
    console.error('Error connecting to the database:', err.stack);
  }
}
connectToDatabase();

export default connection;