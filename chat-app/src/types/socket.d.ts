// types/socket.d.ts
import { Server as IOServer } from "socket.io";
import { Socket } from "net";

export type NextApiResponseWithSocket = {
  socket: Socket & {
    server: {
      io: IOServer;
    };
  };
};
