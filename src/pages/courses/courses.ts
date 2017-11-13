import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CoursePage } from './course/course';
import {DHCourseManager} from "../../providers/dh-course-manager/dh-course-manager";

@IonicPage()
@Component({
  selector: 'page-courses',
  templateUrl: 'courses.html',
})
export class CoursesPage implements OnInit{
  courses: [any];
  constructor(public navCtrl: NavController, public navParams: NavParams, public dhCrsMgr: DHCourseManager) {
  }
  ngOnInit(){
    this.dhCrsMgr.getAllCourses();
  }

  loadCourse(course: string){
    this.navCtrl.push(CoursePage, {selected_course: course});
  }

}
