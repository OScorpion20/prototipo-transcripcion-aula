import { useEffect, useState } from "react";
import { socket } from "./socket";
import { createSpeechRecognizer } from "./speech";

function App() {
  const [transcript, setTranscript] = useState("");
  const [recognizer, setRecognizer] = useState<any>(null);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Conectado al servidor:", socket.id);
    });

    return () => {
      socket.off("connect");
    };
  }, []);

  const iniciarVoz = () => {
    const rec = createSpeechRecognizer((event: any) => {
      const result = event.results[event.resultIndex];
      const text = result[0].transcript;

      // Mostrar texto en pantalla del maestro
      setTranscript(text);

      // ⚠️ Enviar solo frases finalizadas (para pizarrón limpio)
      if (result.isFinal) {
        console.log("Frase final enviada:", text);
        socket.emit("transcription", text);
      }
    });

    if (rec) {
      rec.start();
      setRecognizer(rec);
    }
  };

  const pararVoz = () => {
    recognizer?.stop();
  };

  return (
    <div>
      <h1>Sistema de Transcripción</h1>

      <button onClick={iniciarVoz}>🎤 Iniciar transcripción</button>
      <button onClick={pararVoz}>🛑 Detener</button>

      <h3>Texto transcrito:</h3>
      <p>{transcript}</p>
    </div>
  );
}

export default App;
