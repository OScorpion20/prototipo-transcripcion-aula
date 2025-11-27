import { io } from "socket.io-client";

// Conectar al backend (puerto 4000)
export const socket = io("http://localhost:4000", {
  transports: ["websocket"],
});
