# Sistema de Transcripción en Tiempo Real para Aulas Inclusivas #
Prototipo de apoyo a estudiantes con discapacidad auditiva

Desarrollado por Oscar Uriel Lorenzo Serrano

## Descripción General ##

Este proyecto es un prototipo funcional de un sistema de transcripción de voz a texto en tiempo real, diseñado para mejorar la inclusión de estudiantes con discapacidad auditiva dentro del aula.

El sistema captura la voz del docente, la convierte a texto mediante reconocimiento de voz en tiempo real y la proyecta visualmente en un pizarrón para que los estudiantes puedan seguir la clase sin barreras comunicativas.

Este desarrollo forma parte del proyecto de residencia profesional del Tecnológico Nacional de México (TecNM), campus Colima.

## Objetivo del Proyecto ##

Diseñar un prototipo básico funcional de una aplicación web que:

Capture la voz del docente en tiempo real.

Transcriba el audio a texto utilizando tecnologías web.

Envíe la transcripción a un servidor mediante WebSockets.

Proyecte el texto en un pizarrón.

Todo esto con una arquitectura simple, eficiente y basada en tecnologías gratuitas y accesibles.

## Arquitectura del Proyecto ##

El sistema se compone de dos módulos principales:

ProtoResid/
 ├── frontend/   → interfaz del maestro + pizarrón (React + TS)
 └── backend/    → servidor WebSocket (Node + Express + Socket.io)

Frontend (React + TypeScript)

Captura de voz mediante Web Speech API.

Envío de transcripciones vía socket.io-client.

Vista del maestro para iniciar/detener transcripción.

Vista tipo “pizarrón” que muestra las frases transcritas.

Backend (Node.js + Express + Socket.io)

Recibe transcripciones desde el frontend del maestro.

Reenvía la transcripción a todos los clientes conectados.

Permite que el pizarrón muestre texto en tiempo real.

## Tecnologías Utilizadas ##
Frontend

React + TypeScript

Vite

Web Speech API

Socket.io-client

Backend

Node.js

Express

TypeScript

Socket.io

## Cómo Ejecutar el Proyecto ##
1. Clonar el repositorio
git clone https://github.com/usuario/prototipo-transcripcion-aula.git
cd prototipo-transcripcion-aula

🔧 2. Instalar dependencias
Backend:
cd backend
npm install

Frontend:
cd ../frontend
npm install

▶️ 3. Ejecutar el servidor

En una terminal:

cd backend
npm run dev

🌐 4. Ejecutar el frontend

En otra terminal:

cd frontend
npm run dev

## 5. Abrir las vistas en el navegador ##
Maestro (captura de voz):
http://localhost:5173/

Pizarrón (transcripción proyectada):
http://localhost:5173/pizarron

## Estado del Proyecto ##

Este es un prototipo cuyo objetivo principal es establecer las bases para un sistema más robusto.
Incluye:

Transcripción funcional

Comunicación en tiempo real

Dos interfaces separadas (maestro / pizarrón)

Flujo básico listo para expandirse

## Mejoras Futuras (Rumbo a versión final) ##

Integración con Google Speech-to-Text API para mayor precisión.

Modo offline mejorado.

Integración con base de datos (MongoDB) para guardar historial.

Panel de control del docente.

Diseño visual con TailwindCSS.

### 👤 Autor ###

Oscar Uriel Lorenzo Serrano
Estudiante de Ingeniería en Sistemas Computacionales
Tecnológico Nacional de México — Campus Colima

### Licencia ###

Este proyecto es de uso educativo y puede reutilizarse con fines académicos.
