import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET() {
  try {
    // Query the database to fetch items
    const [rows] = await pool.query("SELECT * FROM items");

    // Return the rows if they exist, otherwise return an empty array
    const items = Array.isArray(rows) ? rows : [];

    return NextResponse.json(items, { status: 200 });
  } catch (error) {
    console.error("Database Error:", error);
    // Handle database errors gracefully
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, description } = body;

    if (!title || !description) {
      return NextResponse.json(
        { error: "Title and description are required" },
        { status: 400 }
      );
    }

    // Insert the data into the database
    const [result] = await pool.query(
      "INSERT INTO items (title, description) VALUES (?, ?)",
      [title, description]
    );

    // Construct the response with the inserted item's ID
    const newItem = { id: result.insertId, title, description };

    return NextResponse.json(newItem, { status: 201 });
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { error: "Failed to insert data into the database" },
      { status: 500 }
    );
  }
}
