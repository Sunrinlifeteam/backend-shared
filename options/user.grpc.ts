import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const serviceHost = 'localhost';
export const servicePort = 60101;

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: `${serviceHost}:${servicePort}`,
    package: 'user',
    protoPath: join(__dirname, '..', 'protocols', 'user.proto'),
  },
};
