import { useEffect, useState } from "react";
import { socket } from "../socket";

function Projector() {
  const [text, setText] = useState("");

  useEffect(() => {
    socket.on("transcription", (msg: string) => {
      setText(msg);
    });

    return () => {
      socket.off("transcription");
    };
  }, []);

  return (
    <div
      style={{
        background: "#000",
        color: "#fff",
        height: "100vh",
        padding: "40px",
        fontSize: "3rem",
        lineHeight: "1.5",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {text || "Esperando transcripción..."}
    </div>
  );
}

export default Projector;
