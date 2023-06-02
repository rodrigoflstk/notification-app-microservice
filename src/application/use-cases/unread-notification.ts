import { Injectable } from '@nestjs/common';
import { NotificationRepository } from '../repositories/notification-repository';
import { NotificationNotFound } from './errors/notification-not-found';

interface unReadNotificationRequest {
  notificationId: string;
}

type unReadNotificationResponse = void;

@Injectable()
export class UnReadNotification {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(
    request: unReadNotificationRequest,
  ): Promise<unReadNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.notificationRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound();
    }

    notification.unRead();

    await this.notificationRepository.save(notification);
  }
}
