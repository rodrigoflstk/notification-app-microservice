import { Module } from '@nestjs/common';
import { NotificationController } from './controllers/notification.controller';
import { SendNotification } from 'src/application/use-cases/send-notification';
import { DatabaseModule } from '../database/database.module';
import { CancelNotification } from '@application/use-cases/cancel-notification';
import { ReadNotification } from '@application/use-cases/read-notification';
import { UnReadNotification } from '@application/use-cases/unread-notification';
import { CountRecipientNotification } from '@application/use-cases/count-recipient-notification';
import { GetRecipientNotification } from '@application/use-cases/get-recipient-notification';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationController],
  providers: [
    SendNotification,
    CancelNotification,
    ReadNotification,
    UnReadNotification,
    CountRecipientNotification,
    GetRecipientNotification,
  ],
})
export class HttpModule {}
