import { NextApiRequest, NextApiResponse } from 'next';
// import { Server } from 'socket.io'
import { Server as HTTPServer } from 'http';
import { Socket as NetSocket } from 'net';
import { Server as IOServer } from 'socket.io';

type NextApiResponseWithSocket = NextApiResponse & {
  socket: NetSocket & {
    server: HTTPServer & {
      io?: IOServer;
    };
  };
};
const SocketHandler = (
  _req: NextApiRequest,
  res: NextApiResponseWithSocket,
) => {
  if (res.socket.server.io) {
    console.log('Socket is already running.');
  } else {
    console.log('Socket is initializing...');

    const io = new IOServer(res.socket.server, {
      path: '/api/socket_io',
    });
    res.socket.server.io = io;

    io.on('connection', (socket) => {
      socket.on('input-change', (msg) => {
        socket.broadcast.emit('update-input', msg);
      });
    });
  }

  res.end();
};

export default SocketHandler;
