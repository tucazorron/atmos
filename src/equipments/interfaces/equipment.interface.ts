import { Document } from 'mongoose';

export interface Equipment extends Document {
  readonly mac: string;
}
