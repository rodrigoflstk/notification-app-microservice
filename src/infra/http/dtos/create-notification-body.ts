import { IsNotEmpty, IsString, IsUUID, Length } from 'class-validator';

export class CreateNotificationBody {
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsString()
  @IsNotEmpty()
  @Length(5, 240)
  content: string;
}
