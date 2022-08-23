import { ClientOptions, Transport } from "@nestjs/microservices";
import { join } from "path";

export const serviceHost = "localhost";
export const servicePort = 60301;

export const grpcClientOptions: ClientOptions = {
    transport: Transport.GRPC,
    options: {
        url: `${serviceHost}:${servicePort}`,
        package: "hello",
        protoPath: join(__dirname, "..", "protocols", "hello.proto"),
    },
};
