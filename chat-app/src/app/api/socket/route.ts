// src/pages/api/socket.ts
import { Server } from "socket.io";
import type { NextApiRequest } from "next";
import type { NextApiResponseWithSocket } from "@/types/socket";

const ioHandler = (req: NextApiRequest, res: NextApiResponseWithSocket) => {
  if (!res.socket.server.io) {
    console.log("🔌 New Socket.IO server...");
    const io = new Server(res.socket.server, {
      path: "/api/socketio",
    });

    io.on("connection", (socket) => {
      console.log("🟢 User connected");

      socket.on("message", (msg) => {
        io.emit("message", msg); // Broadcast message
      });
    });

    res.socket.server.io = io;
  }
  res.end();
};

export default ioHandler;
