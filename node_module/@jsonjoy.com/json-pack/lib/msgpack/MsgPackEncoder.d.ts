import { MsgPackEncoderFast } from './MsgPackEncoderFast';
import type { IWriter, IWriterGrowable } from '@jsonjoy.com/util/lib/buffers';
export declare class MsgPackEncoder<W extends IWriter & IWriterGrowable = IWriter & IWriterGrowable> extends MsgPackEncoderFast<W> {
    writeAny(value: unknown): void;
}
