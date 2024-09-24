# FirebasePushNotification
An example Push Notification project using Google Firebase

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.5.

## Configuration

In order for the application to run properly, you will need to copy the [./public/config-example.json](./public/config-example.json) file to `./public/config.json` (which is set to be git ignored) and populate it with the correct settings.  Then start the application.

These can be found by logging in to your firebase app console (see the Firebase setup section, below).

## Development server

Run `ng serve` or `npm start` to start the dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Finding configuration settings for an existing Firebase app

In order to populate the `config.json` config file, follow these steps:

1. Log in to https://console.firebase.google.com/
2. Select the Project you are interested in from the list presented
3. Go to the Project Settings page (linked to from a cog icon at the top left of the page, by the "Project Overview" link) and view the "General" tab.
4. The details for the `firebaseConfig` section of the `config.json` file is shown under the relevant app in the "Your apps".  You can view these options as code or as "Config" - which can be pasted into the `firebaseConfig` section of the `config.json` file
5. To find the `vapidKey`, go the "Cloud Messaging" tab of the Project Settings page.  Under the "Web configuration" section, view the Web Push Certificate and the Key pair value - this should just show the public key, which is all you need here.


## Settings up a new Firebase app

In order to set up a brand new Firebase app:
1. Log in to https://console.firebase.google.com/.  If you don't have a Google account or login you will need to create a new one.
2. Follow the instructions for "Creating a Firebase project" and "Register your app" here - https://firebase.google.com/docs/web/setup#add-sdk-and-initialize