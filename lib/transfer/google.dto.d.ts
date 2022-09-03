declare module 'google.protobuf' {
    type Empty = Record<string, never>;
    type StringValue = {
        value: string;
    };
    type BoolValue = {
        value: boolean;
    };
}
