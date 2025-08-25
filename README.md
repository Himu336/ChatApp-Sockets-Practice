# ChatApp-Sockets-Practice (Socket.IO)

This project is a simple real-time chat application built to practice and understand the core concepts of **Socket.IO**.

## What I Learned 📚

This repository demonstrates my understanding of how to establish and manage real-time, bidirectional communication between a server and multiple clients.

### Core Socket.IO Methods

1.  **`io.on('connection', (socket) => { ... })`**
    * This is the entry point on the server. It listens for any new client that connects and creates a unique `socket` object for them. Think of `io` as the entire server, and `socket` as the one specific user who just connected.

2.  **`socket.emit(...)`**
    * **Meaning**: "Emit to this one specific socket."
    * **Use**: This sends a message from the server to *only the client who just performed an action* (e.g., sending a welcome message only to the user who just joined).

3.  **`socket.broadcast.emit(...)`**
    * **Meaning**: "Emit to everyone, but broadcast it."
    * **Use**: This sends a message to *all connected clients except for the one who sent the message*. This is perfect for chat messages, where you want everyone else to see what one user typed.

4.  **`io.emit(...)`**
    * **Meaning**: "Emit to everyone."
    * **Use**: This sends a message to absolutely *all connected clients without exception*. It's great for global announcements, like a server notification that a user has connected or disconnected.

#### View from the Chrome browser:
![Chat view from Chrome browser](https://github.com/Himu336/ChatApp-Sockets-Practice/blob/main/socket1.jpg)

#### View from the Brave browser:
![Chat view from Brave browser](https://github.com/Himu336/ChatApp-Sockets-Practice/blob/main/socket2.jpg)

As you can see, the message "message from brave" sent from the Brave browser appears in the Chrome browser's chat log, and vice-versa, confirming that the real-time communication is working correctly.


