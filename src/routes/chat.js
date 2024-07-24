// src/routes/chat.js

export function createConnection(serverUrl, roomId) {
    return {
      connect() {
        console.log(`Connecting to room ${roomId} at ${serverUrl}`);
      },
      disconnect() {
        console.log(`Disconnecting from room ${roomId}`);
      }
    };
  }
  
  export function sendMessage(message) {
    console.log(`Sending message: ${message}`);
  }
  