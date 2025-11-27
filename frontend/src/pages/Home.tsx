import { socket } from "../socket";

export default function Home() {

  const sendTest = () => {
    socket.emit("test-message", "Hola mundo desde el front!");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Panel del Docente</h1>

      <button
        onClick={sendTest}
        className="px-4 py-2 bg-blue-600 text-white rounded shadow"
      >
        Enviar texto de prueba
      </button>

      <p className="mt-4 text-gray-600">
        ⚠️ Aún no conectamos el backend, este botón solo prueba la conexión.
      </p>
    </div>
  );
}
