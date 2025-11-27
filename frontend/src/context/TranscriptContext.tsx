import { createContext, useContext, useState, useEffect } from "react";
import { socket } from "../socket";

interface TranscriptContextType {
  transcript: string;
  setTranscript: (text: string) => void;
}

const TranscriptContext = createContext<TranscriptContextType | undefined>(undefined);

export const TranscriptProvider = ({ children }: { children: React.ReactNode }) => {
  const [transcript, setTranscript] = useState("");

  useEffect(() => {
    // Escuchar transcripciones desde el backend
    socket.on("transcription", (text: string) => {
      setTranscript(text);
    });

    return () => {
      socket.off("transcription");
    };
  }, []);

  return (
    <TranscriptContext.Provider value={{ transcript, setTranscript }}>
      {children}
    </TranscriptContext.Provider>
  );
};

export const useTranscript = () => {
  const ctx = useContext(TranscriptContext);
  if (!ctx) throw new Error("useTranscript must be used inside TranscriptProvider");
  return ctx;
};
