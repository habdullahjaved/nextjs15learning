import { NextApiRequest, NextApiResponse } from "next";
import pool from "@/lib/db";
import { RowDataPacket } from "mysql2";

interface Item {
  id: number;
  title: string;
  description: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  try {
    if (req.method === "GET") {
      const [rows] = await pool.query<RowDataPacket[]>(
        "SELECT * FROM items WHERE id = ?",
        [id]
      );
      const item = rows[0] as Item; // Explicitly cast the result
      res.status(200).json(item);
    } else if (req.method === "PUT") {
      const { title, description } = req.body;
      await pool.query(
        "UPDATE items SET title = ?, description = ? WHERE id = ?",
        [title, description, id]
      );
      res.status(200).json({ id, title, description });
    } else if (req.method === "DELETE") {
      await pool.query("DELETE FROM items WHERE id = ?", [id]);
      res.status(204).end();
    } else {
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
