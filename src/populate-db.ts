
import {database, initializeApp} from "firebase";
import {firebaseConfig} from "./environments/firebase.config";
import {dbData} from "./providers/firebase/db-data";


console.log("WARNING VERY IMPORTANT - PLEASE READ THIS\n\n\n");
console.log('WARNING Please set your own firebase config on src/environmnents/firebase.config.ts');
console.log('Otherwise you will get permissions errors, because the populate-db script is trying to write to my database instead of yours. ');



// initializeApp(firebaseConfig);
//
//
// const coursesRef = database().ref('courses');
// const lessonsRef = database().ref('lessons');
// const challengesRef = database().ref('challenges');
//
//
//
// dbData.courses.forEach( course => {
//
//   console.log('adding course', course.url);
//
//   const courseRef = coursesRef.push({
//     url: course.url,
//     description: course.description,
//     iconUrl: course.iconUrl,
//     courseListIcon: course.courseListIcon,
//     longDescription: course.longDescription
//   });
//
//   let lessonKeysPerCourse = [];
//
//   course.lessons.forEach((lesson:any) =>  {
//
//     console.log('adding lesson ', lesson.url);
//
//     lessonKeysPerCourse.push(lessonsRef.push({
//       description: lesson.description,
//       duration: lesson.duration,
//       title: lesson.title,
//       url: lesson.url,
//       tags: lesson.tags,
//       videoUrl: lesson.videoUrl || null,
//       longDescription: lesson.longDescription,
//       subCategory: lesson.subCategory,
//       lectureNotes: lesson.lectureNotes,
//       examples: lesson.examples,
//       courseId: courseRef.key
//     }).key);
//
//   });
//
//
//   const association = database().ref('lessonsPerCourse');
//
//   const lessonsPerCourse = association.child(courseRef.key);
//
//   lessonKeysPerCourse.forEach(lessonKey => {
//     console.log('adding lesson to course ');
//
//     const lessonCourseAssociation = lessonsPerCourse.child(lessonKey);
//
//     lessonCourseAssociation.set(true);
//   });
//
//   let challengeKeysPerCourse = [];
//
//   course.challenges.forEach((challenge:any) =>  {
//
//     console.log('adding lesson ', challenge.url);
//
//     challengeKeysPerCourse.push(challengesRef.push({
//       description: challenge.description,
//       title: challenge.title,
//       url: challenge.url,
//       hints: challenge.hints,
//       exampleOutput: challenge.exampleOutput,
//       courseId: courseRef.key
//     }).key);
//
//   });
//
//
//   const association2 = database().ref('challengesPerCourse');
//
//   const challengesPerCourse = association2.child(courseRef.key);
//
//   challengeKeysPerCourse.forEach(challengeKey => {
//     console.log('adding challenge to course ');
//
//     const challengeCourseAssociation = challengesPerCourse.child(challengeKey);
//
//     challengeCourseAssociation.set(true);
//   });
//
//
// });




