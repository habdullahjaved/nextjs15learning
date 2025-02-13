import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost", // Change to your database host
  user: "root", // Change to your database user
  password: "", // Change to your database password
  database: "nextjs_crud",
});

export default pool;
