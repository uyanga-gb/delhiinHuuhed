/**
 * Created by uyangaganbaatar on 11/4/17.
 */
import {Injectable} from "@angular/core";
import {CourseListItem} from "./CourseListItem";
import {ChallengeListItem} from "./ChallengeListItem";
import {LectureNoteListItem} from "./LectureNoteListItem";
@Injectable()
export class DHCourseManager {
  allCourses: [any];
  allChallenges: [ChallengeListItem];
  allLectureNotes: [LectureNoteListItem];
    constructor(){
      this.allCourses = [{name: 'Python Intro',
        description: 'Introduction to programming',
        lectureNotes: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8'],
        challenges: ['pythonChallenge1', 'pythonChallenge2',
          'pythonChallenge3', 'pythonChallenge4',
          'pythonChallenge5', 'pythonChallenge6',
          'pythonChallenge7','pythonChallenge8',
          'pythonChallenge9','pythonChallenge10',
          'pythonChallenge11','pythonChallenge12',
          'pythonChallenge13','pythonChallenge14',
          'pythonChallenge15','pythonChallenge16',
          'pythonChallenge17','pythonChallenge18']},
        {name: 'Python Advanced',
          description: 'Advanced level of python course',
          challenges: []},
        {name: 'Web Design - HTML, CSS',
          description: 'Introduction to build websites',
          challenges: []}];

      this.allChallenges = [{id: 'pythonChallenge1', name: 'Challenge 1',
        challenge: '' }];

      this.allLectureNotes = [{id: 'p1', note: ''}];
    }

    init(){


    }

    getAllCourses(){
      return this.allCourses;
    }

    getAllChallegesForCourse(courseName: string){

      let selected_course = this.allCourses.find((course) => course && course.name === courseName)
      let challenges = selected_course
    }
}
