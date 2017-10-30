import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CoursesPage} from "../courses/courses";
import {LoginPage} from "../login/login";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToCourses(){
    this.navCtrl.push(CoursesPage);
  }
  goToLogin(){
    this.navCtrl.push(LoginPage);
  }
  logOut(){
    this.navCtrl.push(HomePage);
  }

}
