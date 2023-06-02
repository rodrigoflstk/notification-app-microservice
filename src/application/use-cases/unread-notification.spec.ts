import { InMemoryNotificationRepository } from '@test/repositories/in-memory-notification-repository';
import { NotificationNotFound } from './errors/notification-not-found';
import { makeNotification } from '@test/factories/notification-factory';
import { UnReadNotification } from './unread-notification';

describe('unread notification Use Case', () => {
  it('Should be able to unread a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const unReadNotification = new UnReadNotification(notificationRepository);

    const notification = makeNotification();

    await notificationRepository.create(notification);

    await unReadNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationRepository.notifications[0].readAt).toEqual(null);
  });

  it('Should not be able to unRead a non existing notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const unReadNotification = new UnReadNotification(notificationRepository);

    expect(() => {
      return unReadNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
