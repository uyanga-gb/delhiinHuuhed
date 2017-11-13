export class CourseListItem {
  id?: string;
  name: string;
  description: string;
  lectureNotes: [string];
  created_at?: string;
  updated_at?: string;
  challenges: [string];

  constructor(){
  }

}
