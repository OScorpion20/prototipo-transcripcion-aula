import express from "express";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
app.use(cors());
app.use(express.json());

// Servidor HTTP base
const httpServer = createServer(app);

// Servidor WebSocket
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

// Cuando un cliente se conecta:
io.on("connection", (socket) => {
  console.log("Cliente conectado:", socket.id);

  socket.on("transcription", (msg: string) => {
    console.log("Transcripción recibida:", msg);

    // Emitir a TODOS los clientes
    io.emit("transcription", msg);
  });

  socket.on("disconnect", () => {
    console.log("Cliente desconectado:", socket.id);
  });
});

// Puerto del backend
const PORT = 4000;
httpServer.listen(PORT, () => {
  console.log("Servidor backend escuchando en http://localhost:" + PORT);
});
