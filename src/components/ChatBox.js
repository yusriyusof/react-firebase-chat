import React, { useEffect, useState, useRef } from "react";

// Firebase
import { query, collection, orderBy, onSnapshot, limit } from "firebase/firestore";
import { db } from "../utilities/firebase";

import SendMessage from "./SendMessage";
import Message from "./Message";

const ChatBox = () => {
  const [messages, setMessages] = useState([]);

  const scroll = useRef();

  useEffect(() => {
    const q = query(
      collection(db, 'messages'),
      orderBy('createdAt'),
      limit(50)
    )

    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let messages = [];

      QuerySnapshot.forEach((doc) => {
        messages.push({...doc.data(), id: doc.id});
      });
      setMessages(messages);
    })
    return () => unsubscribe;
  }, []);

  return (
    <main className="chat-box">
      <div className="messages-wrapper">
      {
        messages?.map((message) => (
          <div key={message.id}>
            <Message message={message} />
          </div>
        ))
      }
      </div>
      <span ref={scroll}></span>
      <SendMessage scroll={scroll} />
    </main>
  );
}

export default ChatBox;