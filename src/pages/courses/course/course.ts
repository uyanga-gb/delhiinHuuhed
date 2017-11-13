import {Component, OnInit} from "@angular/core";
import {NavParams} from "ionic-angular";

@Component ({
  selector: 'page-course',
  templateUrl: 'course.html'
})
export class CoursePage implements OnInit{
  course: object;

  constructor(private navParams: NavParams){

  }
  ngOnInit(){
    this.course = this.navParams.get('selected_course');
  }


}
