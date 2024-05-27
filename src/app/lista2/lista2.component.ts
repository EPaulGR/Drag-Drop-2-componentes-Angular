import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { AppService } from '../app.service';

@Component({
  selector: 'app-lista2',
  standalone: true,
  templateUrl: './lista2.component.html',
  styleUrl: './lista2.component.css',
  imports: [CdkDropList, CdkDrag],
})
export class Lista2Component {

  another: string[] = [];
  nothing: string[] = [];

  constructor(
    public appService: AppService,
  ) {
  }

  ngOnInit(): void {
    this.appService.another$.subscribe(data => this.another = data);
    this.appService.nothing$.subscribe(data => this.nothing = data);
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
    this.appService.updateAnotherList(this.another);
    this.appService.updateNothingList(this.nothing);
  }

}
