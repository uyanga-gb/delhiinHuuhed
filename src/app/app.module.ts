import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {CoursesPage} from "../pages/courses/courses";
import {CoursePage} from "../pages/courses/course/course";
import {LoginPage} from "../pages/login/login";
import {DHCourseManager} from "../providers/dh-course-manager/dh-course-manager";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';
import { FirebaseProvider } from '../providers/firebase/firebase';
import {firebaseConfig} from '../environments/firebase.config';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CoursesPage,
    CoursePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CoursesPage,
    CoursePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DHCourseManager,
    FirebaseProvider
  ]
})
export class AppModule {}
