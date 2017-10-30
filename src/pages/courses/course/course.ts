import {Component, OnInit} from "@angular/core";
import {NavParams} from "ionic-angular";

@Component ({
  selector: 'page-course',
  templateUrl: 'course.html'
})
export class CoursePage implements OnInit{
  course_name: string;
  course: object;

  constructor(private navParams: NavParams){

  }
  ngOnInit(){
    this.course_name = this.navParams.get('course_name');
  }

}
