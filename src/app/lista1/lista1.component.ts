import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { AppService } from '../app.service';

@Component({
  selector: 'app-lista1',
  standalone: true,
  templateUrl: './lista1.component.html',
  styleUrl: './lista1.component.css',
  imports: [CdkDropList, CdkDrag],
})
export class Lista1Component implements OnInit{

  todo: string[] = [];
  done: string[] = [];

  constructor(
    public appService: AppService,
  ) {
  }

  ngOnInit(): void {
    this.appService.todo$.subscribe(data => this.todo = data);
    this.appService.done$.subscribe(data => this.done = data);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      this.updateLists();
    }
  }

  updateLists(): void {
    this.appService.updateTodoList(this.todo);
    this.appService.updateDoneList(this.done);
  }

}
