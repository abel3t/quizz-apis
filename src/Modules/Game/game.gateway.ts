import { SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { Logger } from '@nestjs/common';

@WebSocketGateway()
export class GameGateway {

  private logger: Logger = new Logger('Game Gateway');

  // @WebSocketServer() wss: Server;
  
  @WebSocketServer() server: Server;
  connections = 0;

  async handleConnection(client: Socket, ...args: any[]) {
    console.log(args);
    this.connections++;
    this.logger.log(`Client is connected... ${client.id} `);
  }

  async handleDisconnect(client: Socket) {
    this.connections--;
    this.logger.log(`Client is disconnected... ${client.id} `);
  }

  @SubscribeMessage('msgToServer')
  handleMessage(client: Socket, text: string): WsResponse<string> {
    this.logger.log(`Client Emitted Server... ${client.id} `);
    // this.wss.emit('msgToClient', { Hello: text });
    return { event: 'msgToClient', data: text };
  }
}
