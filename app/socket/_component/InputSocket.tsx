'use client';
import type { ChangeEvent } from 'react';
import { useEffect, useRef, useState } from 'react';
import { default as io } from 'socket.io-client';
export default function InputSocket() {
  const [input, setInput] = useState('');
  //const socketRef = useRef<Socket | undefined>(null);
  const socketRef = useRef<ReturnType<typeof io> | null>(null);
  useEffect(() => {
    const socketInitializer = async () => {
      await fetch('/api/socket');

      socketRef.current = io({
        path: '/api/socket_io',
      });

      socketRef.current.on('connect', () => {
        console.log('Connected');
      });

      socketRef.current.on('update-input', (msg: string) => {
        setInput(msg);
      });
    };
    socketInitializer();

    return () => {
      socketRef.current?.disconnect();
      socketRef.current?.off('update-input');
    };
  }, []);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    socketRef.current?.emit('input-change', e.target.value);
  };

  return (
    <div className="px-20 py-20">
      <input
        placeholder="Type something"
        value={input}
        onChange={onChangeHandler}
      />
    </div>
  );
}
