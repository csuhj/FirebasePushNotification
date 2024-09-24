import { FirebaseOptions } from '@angular/fire/app';

export class Environment {
  public static config: {
    firebaseConfig: FirebaseOptions;
    vapidKey: string;
  }

  public static validateConfig() {
    if (!this.config?.firebaseConfig) {
      throw new Error('Validating config: firebaseConfig section missing');
    }

    if (!this.config.firebaseConfig?.apiKey) {
      throw new Error('Validating config: apiKey missing in firebaseConfig section');
    }

    if (!this.config.firebaseConfig?.authDomain) {
      throw new Error('Validating config: authDomain missing in firebaseConfig section');
    }

    if (!this.config.firebaseConfig?.projectId) {
      throw new Error('Validating config: projectId missing in firebaseConfig section');
    }

    if (!this.config.firebaseConfig?.storageBucket) {
      throw new Error('Validating config: storageBucket missing in firebaseConfig section');
    }

    if (!this.config.firebaseConfig?.messagingSenderId) {
      throw new Error('Validating config: messagingSenderId missing in firebaseConfig section');
    }

    if (!this.config.firebaseConfig?.appId) {
      throw new Error('Validating config: appId missing in firebaseConfig section');
    }

    if (!this.config.vapidKey) {
      throw new Error('Validating config: vapidKey missing');
    }

    console.log('Config validated successfully');
  }
}
