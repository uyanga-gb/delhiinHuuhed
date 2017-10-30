import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CoursePage } from './course/course';

@IonicPage()
@Component({
  selector: 'page-courses',
  templateUrl: 'courses.html',
})
export class CoursesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  loadCourse(course: string){
    this.navCtrl.push(CoursePage, {course_name: course});
  }

}
