export interface CourseDetail {
  id: string,
  name: string,
  description: string,
  lectureNotes: [any],
  created_at?: string,
  updated_at?: string,
  challenges: [any]
}

export class CourseListItem {
  constructor(){
  }

}
