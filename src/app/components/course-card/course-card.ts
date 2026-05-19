import { Component } from '@angular/core';
// import { signal } from '@angular/core';
import {input,output } from '@angular/core';
@Component({
  selector: 'app-course-card',
  imports: [],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard {
  // title = 'Angular Components';
  // enrolled = false;

  // enroll(): void {
  //   this.enrolled = true;
  // }

// likes = signal(0);

// incrementLike() {
//   this.likes.update((value: number) => value + 1);
// }

  //  title = input('Angular Course');
  //  level = input('Beginner');

  title = input.required<string>();
  selected = output<string>();

  selectCourse(): void {
    this.selected.emit(this.title());
  }
  
}
