import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { Environment } from './environment';

(async () => {
  const response = await fetch('./config.json');
  Environment.config = await response.json();

  if (Environment.config?.firebaseConfig) {
    console.log(`Loaded Firebase config from ./config.json for projectId ${Environment.config.firebaseConfig?.projectId}`);
    Environment.validateConfig();
  } else {
    console.log("Couldn't load Firebase config from ./config.json");
  }

  bootstrapApplication(AppComponent, appConfig)
    .catch((err) => console.error(err));
})();
