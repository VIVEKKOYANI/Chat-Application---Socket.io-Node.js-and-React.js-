import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import './Chat.css'
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "localhost:5000";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    console.log(socket);
    socket.emit("join", { name, room }, ({ error }) => {
      alert(error);
    });

    return () => {
      socket.emit("disconnect");

      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", message => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  // function for sending messages

  const sendMessage = event => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  console.log(message, messages);

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
        <Messages messages={messages} name={name} />
      </div>
    </div>
  );
};

export default Chat;
