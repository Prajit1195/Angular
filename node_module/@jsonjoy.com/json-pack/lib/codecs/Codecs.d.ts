import { Writer } from '@jsonjoy.com/util/lib/buffers/Writer';
import { CborJsonValueCodec } from './cbor';
import { JsonJsonValueCodec } from './json';
import { MsgPackJsonValueCodec } from './msgpack';
export declare class Codecs {
    readonly writer: Writer;
    readonly cbor: CborJsonValueCodec;
    readonly msgpack: MsgPackJsonValueCodec;
    readonly json: JsonJsonValueCodec;
    constructor(writer: Writer);
}
