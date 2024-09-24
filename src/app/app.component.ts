import { Component } from '@angular/core';
import { Messaging, NotificationPayload, getToken, onMessage } from '@angular/fire/messaging';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public title = 'FirebasePushNotification';
  public deviceToken: string | undefined;

  constructor(private messaging: Messaging) {}

  public ngOnInit(): void {
    this.getDeviceToken();
    this.registerForMessages();
  }

  public requestPermission() {
    console.log('Requesting permission...');
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
      } else {
        console.log(`Notification permission not granted: ${permission}`);
      }
    });
  }

  private getDeviceToken(): void {
    getToken(this.messaging, { vapidKey: environment.vapidKey })
      .then((token) => {
        this.deviceToken = token;
        console.log(`Got device token: ${token}`);
      })
      .catch((error) => console.log('Token error', error));
  }

  private registerForMessages(): void {
    onMessage(this.messaging, {
      next: (payload) => { this.showNotification(payload.notification) },
      error: (error) => console.log('Message error', error),
      complete: () => console.log('Done listening to messages'),
    });
  }

  private showNotification(notification?: NotificationPayload) {
    alert(`Got message: ${notification?.title}: ${notification?.body}`);
    console.log('Message', notification);
  }
}
