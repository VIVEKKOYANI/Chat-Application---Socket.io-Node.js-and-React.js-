import React, { useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

const Chat = () => {
    const [name, setName] = useState('');
    const [room, seRoom] = useState('');
    return (
    <h1>Chat</h1>
    )
}

export default Chat;