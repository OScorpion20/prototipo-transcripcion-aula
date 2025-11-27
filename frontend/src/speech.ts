export function createSpeechRecognizer(onResult: (event: any) => void) {
  // @ts-ignore
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Tu navegador no soporta reconocimiento de voz.");
    return null;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "es-MX";
  recognition.continuous = true;
  recognition.interimResults = true;

  recognition.onresult = (event: any) => {
    onResult(event);
  };

  recognition.onerror = (e: any) => {
    console.error("Error en SpeechRecognition:", e);
  };

  return recognition;
}
