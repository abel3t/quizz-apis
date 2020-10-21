import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

@Schema()
export class User extends Document {
  @Prop()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Prop()
  @IsString()
  @IsNotEmpty()
  email: string;

  @Prop()
  @IsNumber()
  @IsNotEmpty()
  birthday: number;

  @Prop()
  @IsString()
  @IsNotEmpty()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);