import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  private todoSource = new BehaviorSubject<string[]>(['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep']);
  private doneSource = new BehaviorSubject<string[]>(['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog']);
  private anotherSource = new BehaviorSubject<string[]>(['this is a test', 'we are a joke']);
  private nothingSource = new BehaviorSubject<string[]>(['testing', 'this is not a test']);

  todo$ = this.todoSource.asObservable();
  done$ = this.doneSource.asObservable();
  another$ = this.anotherSource.asObservable();
  nothing$ = this.nothingSource.asObservable();

  todoListId = 'todoList';
  doneListId = 'doneList';
  anotherListId = 'anotherList';
  nothingListId = 'nothingList';

  updateTodoList(item: string[]) {
    this.todoSource.next(item);
  }

  updateDoneList(item: string[]) {
    this.doneSource.next(item);
  }

  updateAnotherList(item: string[]) {
    this.anotherSource.next(item);
  }

  updateNothingList(item: string[]) {
    this.nothingSource.next(item);
  }

}
