import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const serviceHost = 'localhost';
export const servicePort = 60401;

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: `${serviceHost}:${servicePort}`,
    package: 'board',
    protoPath: join(__dirname, '..', 'protocols', 'board.proto'),
  },
};
